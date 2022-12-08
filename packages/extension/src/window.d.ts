import { Window as StreamWindow } from "@stream-wallet/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends StreamWindow {}
}
