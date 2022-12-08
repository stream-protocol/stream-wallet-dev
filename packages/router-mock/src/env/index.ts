import { Env, MessageSender } from "@stream-wallet/router";
import { ExtensionEnv } from "@stream-wallet/router-extension";

export class MockEnv {
  constructor(protected readonly id: string, protected readonly url: string) {}

  envProducer(): (sender: MessageSender) => Env {
    return (sender: MessageSender): Env => {
      const isInternalMsg = ExtensionEnv.checkIsInternalMessage(
        sender,
        this.id,
        this.url
      );

      return {
        isInternalMsg,
        requestInteraction: () => {
          throw new Error("TODO: Implement me");
        },
      };
    };
  }
}
