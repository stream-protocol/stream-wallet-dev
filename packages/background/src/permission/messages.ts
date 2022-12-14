import { StreamError, Message } from "@stream-wallet/router";
import { ROUTE } from "./constants";

export class EnableAccessMsg extends Message<void> {
  public static type() {
    return "enable-access";
  }

  constructor(public readonly chainIds: string[]) {
    super();
  }

  validateBasic(): void {
    if (!this.chainIds || this.chainIds.length === 0) {
      throw new StreamError("permission", 100, "chain id not set");
    }
  }

  route(): string {
    return ROUTE;
  }

  approveExternal(): boolean {
    return true;
  }

  type(): string {
    return EnableAccessMsg.type();
  }
}

export class GetPermissionOriginsMsg extends Message<string[]> {
  public static type() {
    return "get-permission-origins";
  }

  constructor(
    public readonly chainId: string,
    public readonly permissionType: string
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new StreamError("permission", 100, "chain id not set");
    }

    if (!this.permissionType) {
      throw new StreamError("permission", 110, "empty permission type");
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return GetPermissionOriginsMsg.type();
  }
}

export class GetOriginPermittedChainsMsg extends Message<string[]> {
  public static type() {
    return "get-origin-permitted-chains";
  }

  constructor(
    public readonly permissionOrigin: string,
    public readonly permissionType: string
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.permissionOrigin) {
      throw new StreamError("permission", 101, "origin not set");
    }

    if (!this.permissionType) {
      throw new StreamError("permission", 110, "empty permission type");
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return GetOriginPermittedChainsMsg.type();
  }
}

export class AddPermissionOrigin extends Message<void> {
  public static type() {
    return "add-permission-origin";
  }

  constructor(
    public readonly chainId: string,
    public readonly permissionType: string,
    public readonly permissionOrigin: string
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new StreamError("permission", 100, "chain id not set");
    }

    if (!this.permissionType) {
      throw new StreamError("permission", 110, "empty permission type");
    }

    if (!this.permissionOrigin) {
      throw new StreamError("permission", 111, "empty permission origin");
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return AddPermissionOrigin.type();
  }
}

export class RemovePermissionOrigin extends Message<void> {
  public static type() {
    return "remove-permission-origin";
  }

  constructor(
    public readonly chainId: string,
    public readonly permissionType: string,
    public readonly permissionOrigin: string
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new StreamError("permission", 100, "chain id not set");
    }

    if (!this.permissionType) {
      throw new StreamError("permission", 110, "empty permission type");
    }

    if (!this.permissionOrigin) {
      throw new StreamError("permission", 111, "empty permission origin");
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RemovePermissionOrigin.type();
  }
}
