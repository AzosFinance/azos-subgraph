// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class EcosystemInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EcosystemInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EcosystemInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EcosystemInfo", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EcosystemInfo | null {
    return changetype<EcosystemInfo | null>(
      store.get_in_block("EcosystemInfo", id)
    );
  }

  static load(id: string): EcosystemInfo | null {
    return changetype<EcosystemInfo | null>(store.get("EcosystemInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalCollateralLocked(): BigInt {
    let value = this.get("totalCollateralLocked");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalCollateralLocked(value: BigInt) {
    this.set("totalCollateralLocked", Value.fromBigInt(value));
  }

  get totalDebt(): BigInt {
    let value = this.get("totalDebt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalDebt(value: BigInt) {
    this.set("totalDebt", Value.fromBigInt(value));
  }

  get totalSafes(): BigInt {
    let value = this.get("totalSafes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalSafes(value: BigInt) {
    this.set("totalSafes", Value.fromBigInt(value));
  }

  get totalAssetClasses(): BigInt {
    let value = this.get("totalAssetClasses");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalAssetClasses(value: BigInt) {
    this.set("totalAssetClasses", Value.fromBigInt(value));
  }
}

export class AssetClass extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AssetClass entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AssetClass must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AssetClass", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AssetClass | null {
    return changetype<AssetClass | null>(store.get_in_block("AssetClass", id));
  }

  static load(id: string): AssetClass | null {
    return changetype<AssetClass | null>(store.get("AssetClass", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collateralType(): Bytes {
    let value = this.get("collateralType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set collateralType(value: Bytes) {
    this.set("collateralType", Value.fromBytes(value));
  }

  get collateralTypeName(): string {
    let value = this.get("collateralTypeName");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set collateralTypeName(value: string) {
    this.set("collateralTypeName", Value.fromString(value));
  }

  get collateral(): Bytes {
    let value = this.get("collateral");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set collateral(value: Bytes) {
    this.set("collateral", Value.fromBytes(value));
  }

  get collateralLocked(): BigInt {
    let value = this.get("collateralLocked");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set collateralLocked(value: BigInt) {
    this.set("collateralLocked", Value.fromBigInt(value));
  }

  get debtTokensHeld(): BigInt {
    let value = this.get("debtTokensHeld");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set debtTokensHeld(value: BigInt) {
    this.set("debtTokensHeld", Value.fromBigInt(value));
  }

  get activeSafes(): BigInt {
    let value = this.get("activeSafes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set activeSafes(value: BigInt) {
    this.set("activeSafes", Value.fromBigInt(value));
  }

  get safes(): SafeAssetClassLoader {
    return new SafeAssetClassLoader(
      "AssetClass",
      this.get("id")!.toString(),
      "safes"
    );
  }

  get transactionHash(): Bytes | null {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes | null) {
    if (!value) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromBytes(<Bytes>value));
    }
  }

  get createdTimeStamp(): BigInt | null {
    let value = this.get("createdTimeStamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdTimeStamp(value: BigInt | null) {
    if (!value) {
      this.unset("createdTimeStamp");
    } else {
      this.set("createdTimeStamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class UserProxy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserProxy entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserProxy must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserProxy", id.toString(), this);
    }
  }

  static loadInBlock(id: string): UserProxy | null {
    return changetype<UserProxy | null>(store.get_in_block("UserProxy", id));
  }

  static load(id: string): UserProxy | null {
    return changetype<UserProxy | null>(store.get("UserProxy", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get proxy(): Bytes {
    let value = this.get("proxy");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set proxy(value: Bytes) {
    this.set("proxy", Value.fromBytes(value));
  }

  get safes(): SafeUserProxyLoader {
    return new SafeUserProxyLoader(
      "UserProxy",
      this.get("id")!.toString(),
      "safes"
    );
  }

  get transactionHash(): Bytes | null {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes | null) {
    if (!value) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromBytes(<Bytes>value));
    }
  }

  get createdTimeStamp(): BigInt | null {
    let value = this.get("createdTimeStamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdTimeStamp(value: BigInt | null) {
    if (!value) {
      this.unset("createdTimeStamp");
    } else {
      this.set("createdTimeStamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class SafeIdCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SafeIdCounter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SafeIdCounter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SafeIdCounter", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SafeIdCounter | null {
    return changetype<SafeIdCounter | null>(
      store.get_in_block("SafeIdCounter", id)
    );
  }

  static load(id: string): SafeIdCounter | null {
    return changetype<SafeIdCounter | null>(store.get("SafeIdCounter", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get idCounter(): BigInt {
    let value = this.get("idCounter");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set idCounter(value: BigInt) {
    this.set("idCounter", Value.fromBigInt(value));
  }
}

export class Safe extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Safe entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Safe must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Safe", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Safe | null {
    return changetype<Safe | null>(store.get_in_block("Safe", id));
  }

  static load(id: string): Safe | null {
    return changetype<Safe | null>(store.get("Safe", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get safeId(): BigInt {
    let value = this.get("safeId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set safeId(value: BigInt) {
    this.set("safeId", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get amountCollateral(): BigInt {
    let value = this.get("amountCollateral");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountCollateral(value: BigInt) {
    this.set("amountCollateral", Value.fromBigInt(value));
  }

  get amountCoin(): BigInt {
    let value = this.get("amountCoin");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountCoin(value: BigInt) {
    this.set("amountCoin", Value.fromBigInt(value));
  }

  get collateralType(): Bytes {
    let value = this.get("collateralType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set collateralType(value: Bytes) {
    this.set("collateralType", Value.fromBytes(value));
  }

  get assetClass(): string {
    let value = this.get("assetClass");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set assetClass(value: string) {
    this.set("assetClass", Value.fromString(value));
  }

  get transactionHash(): Bytes | null {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes | null) {
    if (!value) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromBytes(<Bytes>value));
    }
  }

  get createdTimeStamp(): BigInt | null {
    let value = this.get("createdTimeStamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdTimeStamp(value: BigInt | null) {
    if (!value) {
      this.unset("createdTimeStamp");
    } else {
      this.set("createdTimeStamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class SafeAssetClass extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SafeAssetClass entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SafeAssetClass must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SafeAssetClass", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SafeAssetClass | null {
    return changetype<SafeAssetClass | null>(
      store.get_in_block("SafeAssetClass", id)
    );
  }

  static load(id: string): SafeAssetClass | null {
    return changetype<SafeAssetClass | null>(store.get("SafeAssetClass", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get safe(): string {
    let value = this.get("safe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set safe(value: string) {
    this.set("safe", Value.fromString(value));
  }

  get assetClass(): string {
    let value = this.get("assetClass");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set assetClass(value: string) {
    this.set("assetClass", Value.fromString(value));
  }
}

export class SafeUserProxy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SafeUserProxy entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SafeUserProxy must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SafeUserProxy", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SafeUserProxy | null {
    return changetype<SafeUserProxy | null>(
      store.get_in_block("SafeUserProxy", id)
    );
  }

  static load(id: string): SafeUserProxy | null {
    return changetype<SafeUserProxy | null>(store.get("SafeUserProxy", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get safe(): string {
    let value = this.get("safe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set safe(value: string) {
    this.set("safe", Value.fromString(value));
  }

  get userProxy(): string {
    let value = this.get("userProxy");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set userProxy(value: string) {
    this.set("userProxy", Value.fromString(value));
  }
}

export class SafeAssetClassLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): SafeAssetClass[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<SafeAssetClass[]>(value);
  }
}

export class SafeUserProxyLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): SafeUserProxy[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<SafeUserProxy[]>(value);
  }
}
