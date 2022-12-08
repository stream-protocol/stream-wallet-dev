import { StreamWallet, BroadcastMode } from "@stream-wallet/types";
import WalletConnect from "@walletconnect/client";
import { StreamWalletQRCodeModalV1 } from "@stream-wallet/wc-qrcode-modal";
import { StreamWalletConnectV1 } from "@stream-wallet/wc-client";
import Axios from "axios";
import { EmbedChainInfos } from "./config";
import { Buffer } from "buffer/";

let StreamWallet: StreamWallet | undefined = undefined;
let promise: Promise<StreamWallet> | undefined = undefined;

async function sendTx(
  chainId: string,
  tx: Uint8Array,
  mode: BroadcastMode
): Promise<Uint8Array> {
  const params = {
    tx_bytes: Buffer.from(tx as any).toString("base64"),
    mode: (() => {
      switch (mode) {
        case "async":
          return "BROADCAST_MODE_ASYNC";
        case "block":
          return "BROADCAST_MODE_BLOCK";
        case "sync":
          return "BROADCAST_MODE_SYNC";
        default:
          return "BROADCAST_MODE_UNSPECIFIED";
      }
    })(),
  };

  const restInstance = Axios.create({
    baseURL: EmbedChainInfos.find((chainInfo) => chainInfo.chainId === chainId)!
      .rest,
  });

  const result = await restInstance.post("/cosmos/tx/v1beta1/txs", params);

  return Buffer.from(result.data["tx_response"].txhash, "hex");
}

export function getWCStream(): Promise<StreamWallet> {
  if (stream-wallet) {
    return Promise.resolve(stream-wallet);
  }

  const fn = () => {
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      signingMethods: [
        "stream-wallet_enable_wallet_connect_v1",
        "stream-wallet_sign_amino_wallet_connect_v1",
      ],
      qrcodeModal: new StreamWalletQRCodeModalV1(),
    });

    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();

      return new Promise<StreamWallet>((resolve, reject) => {
        connector.on("connect", (error) => {
          if (error) {
            reject(error);
          } else {
            stream-wallet = new StreamWalletConnectV1(connector, {
              sendTx,
            });
            resolve(stream-wallet);
          }
        });
      });
    } else {
      stream-wallet = new StreamWalletConnectV1(connector, {
        sendTx,
      });
      return Promise.resolve(stream-wallet);
    }
  };

  if (!promise) {
    promise = fn();
  }

  return promise;
}
