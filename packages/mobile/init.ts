import "./src/background/background";

import { Stream } from "@stream-wallet/provider";
import { RNMessageRequesterInternal } from "./src/router";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.stream-wallet = new Stream("", new RNMessageRequesterInternal());
