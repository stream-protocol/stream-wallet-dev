import { SecretUtils } from "secretjs/types/enigmautils";
import { Stream } from "@stream-wallet/types";

/**
 * StreamEnigmaUtils duplicates the public methods that are supported on secretjs's EnigmaUtils class.
 */
export class StreamEnigmaUtils implements SecretUtils {
  constructor(
    protected readonly chainId: string,
    protected readonly stream-wallet: Stream
  ) {}

  async getPubkey(): Promise<Uint8Array> {
    return await this.stream-wallet.getEnigmaPubKey(this.chainId);
  }

  async getTxEncryptionKey(nonce: Uint8Array): Promise<Uint8Array> {
    return await this.stream-wallet.getEnigmaTxEncryptionKey(this.chainId, nonce);
  }

  async encrypt(
    contractCodeHash: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    msg: object
  ): Promise<Uint8Array> {
    return await this.stream-wallet.enigmaEncrypt(this.chainId, contractCodeHash, msg);
  }

  async decrypt(
    ciphertext: Uint8Array,
    nonce: Uint8Array
  ): Promise<Uint8Array> {
    return await this.stream-wallet.enigmaDecrypt(this.chainId, ciphertext, nonce);
  }
}
