import gql from "graphql-tag";
import * as Urql from "@urql/vue";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Date with time (isoformat) */
  DateTime: any
  UUID: any
  Upload: any
  /** Represents NULL values */
  Void: any
}

export interface AddAudioFile {
  description: Scalars["String"]
  file: Scalars["Upload"]
  fileName: Scalars["String"]
}

export interface AddGraphInput {
  name: Scalars["String"]
}

export interface AudioFile {
  description: Scalars["String"]
  file: DjangoFileType
  uuid: Scalars["UUID"]
}

export type AudioFileUploadResponse = AudioFile | InvalidAudioFile;

/** Choice of foobar */
export enum CellType {
  Comment = "COMMENT",
  Markdown = "MARKDOWN",
  Python = "PYTHON",
  Supercollider = "SUPERCOLLIDER"
}

export interface DjangoFileType {
  name: Scalars["String"]
  path: Scalars["String"]
  size: Scalars["Int"]
  url: Scalars["String"]
}

export interface Edge {
  inNode: Node
  outNode: Node
  uuid: Scalars["UUID"]
}

export interface EdgeInput {
  nodeInUuid: Scalars["UUID"]
  nodeOutUuid: Scalars["UUID"]
}

export interface Graph {
  edges: Array<Edge>
  name: Scalars["String"]
  nodes: Array<Node>
  uuid: Scalars["UUID"]
}

export interface IntFilterLookup {
  contains?: InputMaybe<Scalars["Int"]>
  endsWith?: InputMaybe<Scalars["Int"]>
  exact?: InputMaybe<Scalars["Int"]>
  gt?: InputMaybe<Scalars["Int"]>
  gte?: InputMaybe<Scalars["Int"]>
  iContains?: InputMaybe<Scalars["Int"]>
  iEndsWith?: InputMaybe<Scalars["Int"]>
  iExact?: InputMaybe<Scalars["Int"]>
  iRegex?: InputMaybe<Scalars["String"]>
  iStartsWith?: InputMaybe<Scalars["Int"]>
  inList?: InputMaybe<Array<Scalars["Int"]>>
  isNull?: InputMaybe<Scalars["Boolean"]>
  lt?: InputMaybe<Scalars["Int"]>
  lte?: InputMaybe<Scalars["Int"]>
  range?: InputMaybe<Array<Scalars["Int"]>>
  regex?: InputMaybe<Scalars["String"]>
  startsWith?: InputMaybe<Scalars["Int"]>
}

/** Matches :class:`gencaster.stream.exceptions.InvalidAudioFile`. */
export interface InvalidAudioFile {
  error: Scalars["String"]
}

/** Mutations for GenCaster via GraphQL. */
export interface Mutation {
  addAudioFile: AudioFileUploadResponse
  /**
   * Creates a :class:`~story_graph.models.Edge` for a given
   * :class:`~story_graph.models.Graph`.
   * It does not return the created edge.
   */
  addEdge?: Maybe<Scalars["Void"]>
  addGraph: Graph
  /**
   * Creates a new :class:`~story_graph.models.Node` in a given
   * ~class:`~story_graph.models.Graph`.
   * Although it creates a new node with UUID we don't hand it back yet.
   */
  addNode?: Maybe<Scalars["Void"]>
  /**
   * Creates a new :class:`~story_graph.models.ScriptCell` for a given
   * :class:`~story_graph.models.Edge` and returns this cell.
   */
  addScriptCell: ScriptCell
  /** Deletes a given :class:`~story_graph.models.Edge`. */
  deleteEdge?: Maybe<Scalars["Void"]>
  /** Deletes a given :class:`~story_graph.models.Node`. */
  deleteNode?: Maybe<Scalars["Void"]>
  /** Deletes a given :class:`~story_graph.models.ScriptCell`. */
  deleteScriptCell?: Maybe<Scalars["Void"]>
  /**
   * Updates a given :class:`~story_graph.models.Node` which can be used
   * for renaming or moving it across the canvas.
   */
  updateNode?: Maybe<Scalars["Void"]>
  /** Updates a given :class:`~story_graph.models.ScriptCell` to change its content. */
  updateScriptCells?: Maybe<Scalars["Void"]>
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationAddAudioFileArgs {
  newAudioFile: AddAudioFile
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationAddEdgeArgs {
  newEdge: EdgeInput
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationAddGraphArgs {
  graphInput: AddGraphInput
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationAddNodeArgs {
  newNode: NodeCreate
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationAddScriptCellArgs {
  newScriptCell: NewScriptCellInput
  nodeUuid: Scalars["UUID"]
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationDeleteEdgeArgs {
  edgeUuid: Scalars["UUID"]
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationDeleteNodeArgs {
  nodeUuid: Scalars["UUID"]
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationDeleteScriptCellArgs {
  scriptCellUuid: Scalars["UUID"]
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationUpdateNodeArgs {
  nodeUpdate: NodeUpdate
}

/** Mutations for GenCaster via GraphQL. */
export interface MutationUpdateScriptCellsArgs {
  newCells: Array<ScriptCellInput>
}

export interface NewScriptCellInput {
  cellCode: Scalars["String"]
  cellOrder?: InputMaybe<Scalars["Int"]>
  cellType?: InputMaybe<CellType>
}

/** Matches :class:`gencaster.stream.exceptions.NoStreamAvailable`. */
export interface NoStreamAvailable {
  error: Scalars["String"]
}

export interface Node {
  color: Scalars["String"]
  inEdges: Array<Edge>
  isEntryNode: Scalars["Boolean"]
  name: Scalars["String"]
  outEdges: Array<Edge>
  positionX: Scalars["Float"]
  positionY: Scalars["Float"]
  scriptCells: Array<ScriptCell>
  uuid: Scalars["UUID"]
}

export interface NodeCreate {
  color?: InputMaybe<Scalars["String"]>
  graphUuid: Scalars["UUID"]
  name: Scalars["String"]
  positionX?: InputMaybe<Scalars["Float"]>
  positionY?: InputMaybe<Scalars["Float"]>
}

export interface NodeUpdate {
  color?: InputMaybe<Scalars["String"]>
  name?: InputMaybe<Scalars["String"]>
  positionX?: InputMaybe<Scalars["Float"]>
  positionY?: InputMaybe<Scalars["Float"]>
  uuid: Scalars["UUID"]
}

/** Queries for GenCaster. */
export interface Query {
  audioFile: AudioFile
  audioFiles: Array<AudioFile>
  graph: Graph
  graphs: Array<Graph>
  node: Node
  nodes: Array<Node>
  streamPoint: StreamPoint
  streamPoints: Array<StreamPoint>
}

/** Queries for GenCaster. */
export interface QueryAudioFileArgs {
  pk: Scalars["ID"]
}

/** Queries for GenCaster. */
export interface QueryGraphArgs {
  pk: Scalars["ID"]
}

/** Queries for GenCaster. */
export interface QueryNodeArgs {
  pk: Scalars["ID"]
}

/** Queries for GenCaster. */
export interface QueryStreamPointArgs {
  pk: Scalars["ID"]
}

/** Queries for GenCaster. */
export interface QueryStreamPointsArgs {
  filters?: InputMaybe<StreamPointFilter>
}

export interface ScriptCell {
  cellCode: Scalars["String"]
  cellOrder: Scalars["Int"]
  cellType: CellType
  node: Node
  uuid: Scalars["UUID"]
}

export interface ScriptCellInput {
  cellCode: Scalars["String"]
  cellOrder?: InputMaybe<Scalars["Int"]>
  cellType?: InputMaybe<CellType>
  uuid?: InputMaybe<Scalars["UUID"]>
}

export interface Stream {
  active: Scalars["Boolean"]
  createdDate: Scalars["DateTime"]
  modifiedDate: Scalars["DateTime"]
  streamPoint: StreamPoint
  uuid: Scalars["UUID"]
}

export interface StreamInfo {
  stream: Stream
  streamInstruction?: Maybe<StreamInstruction>
}

export type StreamInfoResponse = NoStreamAvailable | StreamInfo;

export interface StreamInstruction {
  createdDate: Scalars["DateTime"]
  instructionText: Scalars["String"]
  modifiedDate: Scalars["DateTime"]
  returnValue: Scalars["String"]
  state: Scalars["String"]
  uuid: Scalars["UUID"]
}

export interface StreamPoint {
  createdDate: Scalars["DateTime"]
  host: Scalars["String"]
  janusInPort?: Maybe<Scalars["Int"]>
  janusInRoom?: Maybe<Scalars["Int"]>
  janusOutPort?: Maybe<Scalars["Int"]>
  janusOutRoom?: Maybe<Scalars["Int"]>
  lastLive?: Maybe<Scalars["DateTime"]>
  modifiedDate: Scalars["DateTime"]
  port: Scalars["Int"]
  useInput: Scalars["Boolean"]
  uuid: Scalars["UUID"]
}

export interface StreamPointFilter {
  janusInPort?: InputMaybe<IntFilterLookup>
  uuid?: InputMaybe<UuidFilterLookup>
}

export interface Subscription {
  count: Scalars["Int"]
  graph: Graph
  node: Node
  streamInfo: StreamInfoResponse
}

export interface SubscriptionCountArgs {
  target?: Scalars["Int"]
}

export interface SubscriptionGraphArgs {
  graphUuid: Scalars["UUID"]
}

export interface SubscriptionNodeArgs {
  nodeUuid: Scalars["UUID"]
}

export interface SubscriptionStreamInfoArgs {
  graphUuid: Scalars["UUID"]
}

export interface UuidFilterLookup {
  contains?: InputMaybe<Scalars["UUID"]>
  endsWith?: InputMaybe<Scalars["UUID"]>
  exact?: InputMaybe<Scalars["UUID"]>
  gt?: InputMaybe<Scalars["UUID"]>
  gte?: InputMaybe<Scalars["UUID"]>
  iContains?: InputMaybe<Scalars["UUID"]>
  iEndsWith?: InputMaybe<Scalars["UUID"]>
  iExact?: InputMaybe<Scalars["UUID"]>
  iRegex?: InputMaybe<Scalars["String"]>
  iStartsWith?: InputMaybe<Scalars["UUID"]>
  inList?: InputMaybe<Array<Scalars["UUID"]>>
  isNull?: InputMaybe<Scalars["Boolean"]>
  lt?: InputMaybe<Scalars["UUID"]>
  lte?: InputMaybe<Scalars["UUID"]>
  range?: InputMaybe<Array<Scalars["UUID"]>>
  regex?: InputMaybe<Scalars["String"]>
  startsWith?: InputMaybe<Scalars["UUID"]>
}

export type GetGraphsQueryVariables = Exact<{ [key: string]: never }>;

export interface GetGraphsQuery { graphs: Array<{ uuid: any; name: string }> }

export type CreateEdgeMutationVariables = Exact<{
  nodeInUuid: Scalars["UUID"]
  nodeOutUuid: Scalars["UUID"]
}>;

export interface CreateEdgeMutation { addEdge?: any | null }

export type CreateNodeMutationVariables = Exact<{
  name: Scalars["String"]
  graphUuid: Scalars["UUID"]
  color?: InputMaybe<Scalars["String"]>
  positionX?: InputMaybe<Scalars["Float"]>
  positionY?: InputMaybe<Scalars["Float"]>
}>;

export interface CreateNodeMutation { addNode?: any | null }

export type UpdateNodeMutationVariables = Exact<{
  nodeUuid: Scalars["UUID"]
  name?: InputMaybe<Scalars["String"]>
  color?: InputMaybe<Scalars["String"]>
  positionX?: InputMaybe<Scalars["Float"]>
  positionY?: InputMaybe<Scalars["Float"]>
}>;

export interface UpdateNodeMutation { updateNode?: any | null }

export type DeleteNodeMutationVariables = Exact<{
  nodeUuid: Scalars["UUID"]
}>;

export interface DeleteNodeMutation { deleteNode?: any | null }

export type DeleteEdgeMutationVariables = Exact<{
  edgeUuid: Scalars["UUID"]
}>;

export interface DeleteEdgeMutation { deleteEdge?: any | null }

export type CreateScriptCellMutationVariables = Exact<{
  nodeUuid: Scalars["UUID"]
  newScriptCell: NewScriptCellInput
}>;

export interface CreateScriptCellMutation { addScriptCell: { cellOrder: number; uuid: any; cellType: CellType; cellCode: string } }

export type DeleteScriptCellMutationVariables = Exact<{
  scriptCellUuid: Scalars["UUID"]
}>;

export interface DeleteScriptCellMutation { deleteScriptCell?: any | null }

export type UpdateScriptCellsMutationVariables = Exact<{
  newCells: Array<ScriptCellInput> | ScriptCellInput
}>;

export interface UpdateScriptCellsMutation { updateScriptCells?: any | null }

export type CountSubscriptionSubscriptionVariables = Exact<{ [key: string]: never }>;

export interface CountSubscriptionSubscription { count: number }

export type GraphSubscriptionVariables = Exact<{
  uuid: Scalars["UUID"]
}>;

export interface GraphSubscription { graph: { name: string; uuid: any; edges: Array<{ uuid: any; outNode: { uuid: any }; inNode: { uuid: any } }>; nodes: Array<{ name: string; uuid: any; positionX: number; positionY: number; color: string; scriptCells: Array<{ cellCode: string; cellOrder: number; cellType: CellType; uuid: any }> }> } }

export type NodeSubscriptionVariables = Exact<{
  uuid: Scalars["UUID"]
}>;

export interface NodeSubscription { node: { color: string; name: string; positionX: number; positionY: number; uuid: any; scriptCells: Array<{ cellCode: string; cellOrder: number; cellType: CellType; uuid: any }> } }

export type CreateGraphMutationVariables = Exact<{
  graphInput: AddGraphInput
}>;

export interface CreateGraphMutation { addGraph: { name: string; uuid: any; nodes: Array<{ name: string; uuid: any; isEntryNode: boolean }> } }

export type StreamSubscriptionVariables = Exact<{
  graphUuid: Scalars["UUID"]
}>;

export interface StreamSubscription { streamInfo: { __typename: "NoStreamAvailable"; error: string } | { __typename: "StreamInfo"; stream: { active: boolean; createdDate: any; modifiedDate: any; uuid: any; streamPoint: { uuid: any; port: number; useInput: boolean; modifiedDate: any; lastLive?: any | null; host: string; createdDate: any; janusInPort?: number | null; janusInRoom?: number | null; janusOutPort?: number | null; janusOutRoom?: number | null } }; streamInstruction?: { createdDate: any; instructionText: string; modifiedDate: any; state: string; uuid: any; returnValue: string } | null } }

export type StreamPointsQueryVariables = Exact<{ [key: string]: never }>;

export interface StreamPointsQuery { streamPoints: Array<{ createdDate: any; host: string; janusInPort?: number | null; janusInRoom?: number | null; janusOutPort?: number | null; janusOutRoom?: number | null; lastLive?: any | null; modifiedDate: any; port: number; useInput: boolean; uuid: any }> }

export type UploadAudioFileMutationVariables = Exact<{
  addAudioFile: AddAudioFile
}>;

export interface UploadAudioFileMutation { addAudioFile: { __typename: "AudioFile"; uuid: any; description: string; file: { url: string; name: string } } | { __typename: "InvalidAudioFile"; error: string } }

export const GetGraphsDocument = gql`
    query GetGraphs {
  graphs {
    uuid
    name
  }
}
    `;

export function useGetGraphsQuery(options: Omit<Urql.UseQueryArgs<never, GetGraphsQueryVariables>, "query"> = {}) {
  return Urql.useQuery<GetGraphsQuery>({ query: GetGraphsDocument, ...options });
}
export const CreateEdgeDocument = gql`
    mutation createEdge($nodeInUuid: UUID!, $nodeOutUuid: UUID!) {
  addEdge(newEdge: {nodeInUuid: $nodeInUuid, nodeOutUuid: $nodeOutUuid})
}
    `;

export function useCreateEdgeMutation() {
  return Urql.useMutation<CreateEdgeMutation, CreateEdgeMutationVariables>(CreateEdgeDocument);
}
export const CreateNodeDocument = gql`
    mutation createNode($name: String!, $graphUuid: UUID!, $color: String, $positionX: Float, $positionY: Float) {
  addNode(
    newNode: {name: $name, graphUuid: $graphUuid, color: $color, positionX: $positionX, positionY: $positionY}
  )
}
    `;

export function useCreateNodeMutation() {
  return Urql.useMutation<CreateNodeMutation, CreateNodeMutationVariables>(CreateNodeDocument);
}
export const UpdateNodeDocument = gql`
    mutation updateNode($nodeUuid: UUID!, $name: String, $color: String, $positionX: Float, $positionY: Float) {
  updateNode(
    nodeUpdate: {uuid: $nodeUuid, name: $name, color: $color, positionX: $positionX, positionY: $positionY}
  )
}
    `;

export function useUpdateNodeMutation() {
  return Urql.useMutation<UpdateNodeMutation, UpdateNodeMutationVariables>(UpdateNodeDocument);
}
export const DeleteNodeDocument = gql`
    mutation deleteNode($nodeUuid: UUID!) {
  deleteNode(nodeUuid: $nodeUuid)
}
    `;

export function useDeleteNodeMutation() {
  return Urql.useMutation<DeleteNodeMutation, DeleteNodeMutationVariables>(DeleteNodeDocument);
}
export const DeleteEdgeDocument = gql`
    mutation deleteEdge($edgeUuid: UUID!) {
  deleteEdge(edgeUuid: $edgeUuid)
}
    `;

export function useDeleteEdgeMutation() {
  return Urql.useMutation<DeleteEdgeMutation, DeleteEdgeMutationVariables>(DeleteEdgeDocument);
}
export const CreateScriptCellDocument = gql`
    mutation createScriptCell($nodeUuid: UUID!, $newScriptCell: NewScriptCellInput!) {
  addScriptCell(nodeUuid: $nodeUuid, newScriptCell: $newScriptCell) {
    cellOrder
    uuid
    cellType
    cellCode
  }
}
    `;

export function useCreateScriptCellMutation() {
  return Urql.useMutation<CreateScriptCellMutation, CreateScriptCellMutationVariables>(CreateScriptCellDocument);
}
export const DeleteScriptCellDocument = gql`
    mutation deleteScriptCell($scriptCellUuid: UUID!) {
  deleteScriptCell(scriptCellUuid: $scriptCellUuid)
}
    `;

export function useDeleteScriptCellMutation() {
  return Urql.useMutation<DeleteScriptCellMutation, DeleteScriptCellMutationVariables>(DeleteScriptCellDocument);
}
export const UpdateScriptCellsDocument = gql`
    mutation updateScriptCells($newCells: [ScriptCellInput!]!) {
  updateScriptCells(newCells: $newCells)
}
    `;

export function useUpdateScriptCellsMutation() {
  return Urql.useMutation<UpdateScriptCellsMutation, UpdateScriptCellsMutationVariables>(UpdateScriptCellsDocument);
}
export const CountSubscriptionDocument = gql`
    subscription CountSubscription {
  count
}
    `;

export function useCountSubscriptionSubscription<R = CountSubscriptionSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, CountSubscriptionSubscriptionVariables>, "query"> = {}, handler?: Urql.SubscriptionHandlerArg<CountSubscriptionSubscription, R>) {
  return Urql.useSubscription<CountSubscriptionSubscription, R, CountSubscriptionSubscriptionVariables>({ query: CountSubscriptionDocument, ...options }, handler);
}
export const GraphDocument = gql`
    subscription graph($uuid: UUID!) {
  graph(graphUuid: $uuid) {
    name
    uuid
    edges {
      uuid
      outNode {
        uuid
      }
      inNode {
        uuid
      }
    }
    nodes {
      name
      uuid
      scriptCells {
        cellCode
        cellOrder
        cellType
        uuid
      }
      positionX
      positionY
      color
    }
  }
}
    `;

export function useGraphSubscription<R = GraphSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, GraphSubscriptionVariables>, "query"> = {}, handler?: Urql.SubscriptionHandlerArg<GraphSubscription, R>) {
  return Urql.useSubscription<GraphSubscription, R, GraphSubscriptionVariables>({ query: GraphDocument, ...options }, handler);
}
export const NodeDocument = gql`
    subscription node($uuid: UUID!) {
  node(nodeUuid: $uuid) {
    color
    name
    positionX
    positionY
    scriptCells {
      cellCode
      cellOrder
      cellType
      uuid
    }
    uuid
  }
}
    `;

export function useNodeSubscription<R = NodeSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, NodeSubscriptionVariables>, "query"> = {}, handler?: Urql.SubscriptionHandlerArg<NodeSubscription, R>) {
  return Urql.useSubscription<NodeSubscription, R, NodeSubscriptionVariables>({ query: NodeDocument, ...options }, handler);
}
export const CreateGraphDocument = gql`
    mutation CreateGraph($graphInput: AddGraphInput!) {
  addGraph(graphInput: $graphInput) {
    name
    uuid
    nodes {
      name
      uuid
      isEntryNode
    }
  }
}
    `;

export function useCreateGraphMutation() {
  return Urql.useMutation<CreateGraphMutation, CreateGraphMutationVariables>(CreateGraphDocument);
}
export const StreamDocument = gql`
    subscription stream($graphUuid: UUID!) {
  streamInfo(graphUuid: $graphUuid) {
    ... on StreamInfo {
      __typename
      stream {
        active
        createdDate
        modifiedDate
        streamPoint {
          uuid
          port
          useInput
          modifiedDate
          lastLive
          host
          createdDate
          janusInPort
          janusInRoom
          janusOutPort
          janusOutRoom
        }
        uuid
      }
      streamInstruction {
        createdDate
        instructionText
        modifiedDate
        state
        uuid
        returnValue
      }
    }
    ... on NoStreamAvailable {
      __typename
      error
    }
  }
}
    `;

export function useStreamSubscription<R = StreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, StreamSubscriptionVariables>, "query"> = {}, handler?: Urql.SubscriptionHandlerArg<StreamSubscription, R>) {
  return Urql.useSubscription<StreamSubscription, R, StreamSubscriptionVariables>({ query: StreamDocument, ...options }, handler);
}
export const StreamPointsDocument = gql`
    query streamPoints {
  streamPoints {
    createdDate
    host
    janusInPort
    janusInRoom
    janusOutPort
    janusOutRoom
    lastLive
    modifiedDate
    port
    useInput
    uuid
  }
}
    `;

export function useStreamPointsQuery(options: Omit<Urql.UseQueryArgs<never, StreamPointsQueryVariables>, "query"> = {}) {
  return Urql.useQuery<StreamPointsQuery>({ query: StreamPointsDocument, ...options });
}
export const UploadAudioFileDocument = gql`
    mutation UploadAudioFile($addAudioFile: AddAudioFile!) {
  addAudioFile(newAudioFile: $addAudioFile) {
    ... on AudioFile {
      __typename
      uuid
      description
      file {
        url
        name
      }
    }
    ... on InvalidAudioFile {
      __typename
      error
    }
  }
}
    `;

export function useUploadAudioFileMutation() {
  return Urql.useMutation<UploadAudioFileMutation, UploadAudioFileMutationVariables>(UploadAudioFileDocument);
}
