import { Guard } from "@stream-wallet/router";
import { ExtensionGuards } from "@stream-wallet/router-extension";

export class MockGuards {
  static readonly checkOriginIsValid: Guard =
    ExtensionGuards.checkOriginIsValid;

  static readonly checkMessageIsInternal: Guard =
    ExtensionGuards.checkMessageIsInternal;
}
