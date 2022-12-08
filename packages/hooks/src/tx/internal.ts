import {
  CosmosQueriesImpl,
  IQueriesStore,
  OsmosisQueries,
} from "@stream-wallet/stores";

export type QueriesStore = IQueriesStore<
  Partial<OsmosisQueries> & {
    cosmos?: Pick<CosmosQueriesImpl, "queryDelegations">;
  }
>;
