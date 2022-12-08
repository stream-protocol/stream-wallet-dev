import {
  ChainStore,
  QueriesStore,
  AccountStore,
  CosmosAccount,
  CosmosQueries,
} from "@stream-wallet/stores";
import { IndexedDBKVStore } from "@stream-wallet/common";
import { ChainInfo } from "@stream-wallet/types";
import { getWCStream } from "../get-wc-stream-wallet";
import { EmbedChainInfos } from "../config";

export class RootStore {
  public readonly chainStore: ChainStore;

  public readonly queriesStore: QueriesStore<[CosmosQueries]>;
  public readonly accountStore: AccountStore<[CosmosAccount]>;

  constructor() {
    this.chainStore = new ChainStore<ChainInfo>(EmbedChainInfos);

    this.queriesStore = new QueriesStore(
      new IndexedDBKVStore("store_queries"),
      this.chainStore,
      CosmosQueries.use()
    );

    this.accountStore = new AccountStore(
      window,
      this.chainStore,
      () => {
        return {
          suggestChain: false,
          autoInit: true,
          getStream: getWCStream,
        };
      },
      CosmosAccount.use({
        queriesStore: this.queriesStore,
      })
    );
  }
}

export function createRootStore() {
  return new RootStore();
}
