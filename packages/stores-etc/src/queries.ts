import { QueriesSetBase, ChainGetter } from "@stream-wallet/stores";
import { KVStore } from "@stream-wallet/common";
import { DeepReadonly } from "utility-types";
import { ObservableQueryERC20Metadata } from "./erc20";
import { ObservableQueryEVMTokenInfo } from "./axelar";

export interface StreamETCQueries {
  stream-walletETC: StreamETCQueriesImpl;
}

export const StreamETCQueries = {
  use(options: {
    ethereumURL: string;
  }): (
    queriesSetBase: QueriesSetBase,
    kvStore: KVStore,
    chainId: string,
    chainGetter: ChainGetter
  ) => StreamETCQueries {
    return (
      queriesSetBase: QueriesSetBase,
      kvStore: KVStore,
      chainId: string,
      chainGetter: ChainGetter
    ) => {
      return {
        stream-walletETC: new StreamETCQueriesImpl(
          queriesSetBase,
          kvStore,
          chainId,
          chainGetter,
          options.ethereumURL
        ),
      };
    };
  },
};

export class StreamETCQueriesImpl {
  public readonly queryERC20Metadata: DeepReadonly<ObservableQueryERC20Metadata>;
  public readonly queryEVMTokenInfo: DeepReadonly<ObservableQueryEVMTokenInfo>;

  constructor(
    _base: QueriesSetBase,
    kvStore: KVStore,
    chainId: string,
    chainGetter: ChainGetter,
    ethereumURL: string
  ) {
    this.queryERC20Metadata = new ObservableQueryERC20Metadata(
      kvStore,
      ethereumURL
    );
    this.queryEVMTokenInfo = new ObservableQueryEVMTokenInfo(
      kvStore,
      chainId,
      chainGetter
    );
  }
}
