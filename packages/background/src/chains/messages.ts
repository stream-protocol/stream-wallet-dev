import { StreamError, Message } from "@stream-wallet/router";
import { ChainInfoWithCoreTypes } from "./types";
import { ChainInfo } from "@stream-wallet/types";
import { ROUTE } from "./constants";

export class GetChainInfosMsg extends Message<{
  chainInfos: ChainInfoWithCoreTypes[];
}> {
  public static type() {
    return "get-chain-infos";
  }

  validateBasic(): void {
    // noop
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return GetChainInfosMsg.type();
  }
}

export class SuggestChainInfoMsg extends Message<void> {
  public static type() {
    return "suggest-chain-info";
  }

  constructor(public readonly chainInfo: ChainInfo) {
    super();
  }

  validateBasic(): void {
    if (!this.chainInfo) {
      throw new StreamError("chains", 100, "Chain info not set");
    }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return SuggestChainInfoMsg.type();
  }
}

export class RemoveSuggestedChainInfoMsg extends Message<
  ChainInfoWithCoreTypes[]
> {
  public static type() {
    return "remove-suggested-chain-info";
  }

  constructor(public readonly chainId: string) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new StreamError("chains", 101, "Chain id not set");
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RemoveSuggestedChainInfoMsg.type();
  }
}
