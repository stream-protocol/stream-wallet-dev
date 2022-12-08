import { ChainInfo } from "@stream-wallet/types";

export type ChainInfoWithRepoUpdateOptions = ChainInfo & {
  updateFromRepoDisabled?: boolean;
};

export type ChainInfoWithCoreTypes = ChainInfo & {
  embeded: boolean;
} & ChainInfoWithRepoUpdateOptions;
