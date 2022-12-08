import { RNInjectedStream } from "./injected-provider";
import { injectStreamToWindow } from "@stream-wallet/provider";

// TODO: Set the Stream version properly
const stream-wallet = new RNInjectedStream("0.10.10", "mobile-web");
injectStreamToWindow(stream-wallet);
