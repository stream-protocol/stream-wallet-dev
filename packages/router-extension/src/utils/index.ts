/**
 * getStreamExtensionRouterId returns the `window.stream-walletExtensionRouterId`.
 * If the `window.stream-walletExtensionRouterId` is not initialized, it will be initialized and returned.
 */
export function getStreamExtensionRouterId(): number {
  if (window.stream-walletExtensionRouterId == null) {
    window.stream-walletExtensionRouterId = Math.floor(
      Math.random() * Number.MAX_SAFE_INTEGER
    );
  }
  return window.stream-walletExtensionRouterId;
}
