<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { type Ref, ref, watch } from "vue";
import { ElButton } from "element-plus";
import { usePlayerStore } from "@/stores/Player";
import type { Stream, StreamVariableInput } from "@/graphql";
import { useSendStreamVariableMutation } from "@/graphql";

const props = withDefaults(
  defineProps<{
    showButton?: boolean;
    stream: Pick<Stream, "uuid">;
  }>(),
  {
    showButton: false,
  },
);

const { streamGPS, gpsError, gpsSuccess } = storeToRefs(usePlayerStore());

const sendStreamVariableMutation = useSendStreamVariableMutation();

const watcherId: Ref<number | undefined> = ref(undefined);
const sendNull: Ref<boolean> = ref(false);

const startStreaming = () => {
  console.log("Start GPS streaming");

  watcherId.value = navigator.geolocation.watchPosition(
    (position) => {
      gpsSuccess.value = true;
      console.log("New position ", position);
      const streamVariables: StreamVariableInput[] = [];

      // hacky but somehow we can not access the interface via .keys or .entries
      [
        "longitude",
        "latitude",
        "speed",
        "accuracy",
        "heading",
        "altitude",
        "altitudeAccuracy",
      ].forEach((k) => {
        // @ts-expect-error 7053: ts does not like to access the attributes via strings?
        const v: any = position.coords[k];
        if (v === null && !sendNull.value) return;

        streamVariables.push({
          streamUuid: props.stream.uuid,
          key: k,
          value: String(v),
          streamToSc: !isNaN(v),
        });
      });

      if (streamVariables.length > 0)
        sendStreamVariableMutation.executeMutation({ streamVariables });
    },
    (e) => {
      console.log("Could not successfully obtain GPS data");
      gpsError.value = e;
    },
    {
      enableHighAccuracy: true,
      maximumAge: Infinity,
    },
  );
};

const stopStreaming = () => {
  console.log("Stop GPS streaming");
  if (watcherId.value) navigator.geolocation.clearWatch(watcherId.value);
};

watch(streamGPS, () => {
  console.log("Stream GPS changed");
  streamGPS.value ? startStreaming() : stopStreaming();
});
</script>

<template>
  <ElButton
    v-if="showButton"
    class="button"
    type="warning"
    @click="() => (streamGPS = !streamGPS)"
  >
    {{ streamGPS ? "Disable" : "Activate" }} GPS streaming
  </ElButton>
</template>
