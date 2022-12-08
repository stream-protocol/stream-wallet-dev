import { InjectedStream } from "@stream-wallet/provider";
import { injectStreamToWindow } from "@stream-wallet/provider";

import manifest from "../../manifest.json";

const stream-wallet = new InjectedStream(manifest.version, "extension");
injectStreamToWindow(stream-wallet);
