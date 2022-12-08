import { Stream } from "@stream-wallet/types";

export const getStreamFromWindow: () => Promise<
  Stream | undefined
> = async () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  if (window.stream-wallet) {
    return window.stream-wallet;
  }

  if (document.readyState === "complete") {
    return window.stream-wallet;
  }

  return new Promise((resolve) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === "complete"
      ) {
        resolve(window.stream-wallet);
        document.removeEventListener("readystatechange", documentStateChange);
      }
    };

    document.addEventListener("readystatechange", documentStateChange);
  });
};
