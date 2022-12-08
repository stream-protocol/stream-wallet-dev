import {
  Stream,
  OfflineDirectSigner,
  OfflineAminoSigner,
  AccountData,
  AminoSignResponse,
  StdSignDoc,
  DirectSignResponse,
  SignDoc,
} from "@stream-wallet/types";

export class CosmJSOfflineSignerOnlyAmino implements OfflineAminoSigner {
  constructor(
    protected readonly chainId: string,
    protected readonly stream-wallet: Stream
  ) {}

  async getAccounts(): Promise<AccountData[]> {
    const key = await this.stream-wallet.getKey(this.chainId);

    return [
      {
        address: key.bech32Address,
        // Currently, only secp256k1 is supported.
        algo: "secp256k1",
        pubkey: key.pubKey,
      },
    ];
  }

  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    if (this.chainId !== signDoc.chain_id) {
      throw new Error("Unmatched chain id with the offline signer");
    }

    const key = await this.stream-wallet.getKey(signDoc.chain_id);

    if (key.bech32Address !== signerAddress) {
      throw new Error("Unknown signer address");
    }

    return await this.stream-wallet.signAmino(this.chainId, signerAddress, signDoc);
  }

  // Fallback function for the legacy cosmjs implementation before the staragte.
  async sign(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    return await this.signAmino(signerAddress, signDoc);
  }
}

export class CosmJSOfflineSigner
  extends CosmJSOfflineSignerOnlyAmino
  implements OfflineAminoSigner, OfflineDirectSigner {
  constructor(
    protected readonly chainId: string,
    protected readonly stream-wallet: Stream
  ) {
    super(chainId, stream-wallet);
  }

  async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    if (this.chainId !== signDoc.chainId) {
      throw new Error("Unmatched chain id with the offline signer");
    }

    const key = await this.stream-wallet.getKey(signDoc.chainId);

    if (key.bech32Address !== signerAddress) {
      throw new Error("Unknown signer address");
    }

    return await this.stream-wallet.signDirect(this.chainId, signerAddress, signDoc);
  }
}
