// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddAuthorization extends ethereum.Event {
  get params(): AddAuthorization__Params {
    return new AddAuthorization__Params(this);
  }
}

export class AddAuthorization__Params {
  _event: AddAuthorization;

  constructor(event: AddAuthorization) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DeployCollateralJoin extends ethereum.Event {
  get params(): DeployCollateralJoin__Params {
    return new DeployCollateralJoin__Params(this);
  }
}

export class DeployCollateralJoin__Params {
  _event: DeployCollateralJoin;

  constructor(event: DeployCollateralJoin) {
    this._event = event;
  }

  get _cType(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _collateral(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _collateralJoin(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DisableCollateralJoin extends ethereum.Event {
  get params(): DisableCollateralJoin__Params {
    return new DisableCollateralJoin__Params(this);
  }
}

export class DisableCollateralJoin__Params {
  _event: DisableCollateralJoin;

  constructor(event: DisableCollateralJoin) {
    this._event = event;
  }

  get _collateralJoin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DisableContract extends ethereum.Event {
  get params(): DisableContract__Params {
    return new DisableContract__Params(this);
  }
}

export class DisableContract__Params {
  _event: DisableContract;

  constructor(event: DisableContract) {
    this._event = event;
  }
}

export class RemoveAuthorization extends ethereum.Event {
  get params(): RemoveAuthorization__Params {
    return new RemoveAuthorization__Params(this);
  }
}

export class RemoveAuthorization__Params {
  _event: RemoveAuthorization;

  constructor(event: RemoveAuthorization) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CollateralJoinFactory extends ethereum.SmartContract {
  static bind(address: Address): CollateralJoinFactory {
    return new CollateralJoinFactory("CollateralJoinFactory", address);
  }

  authorizedAccounts(_account: Address): boolean {
    let result = super.call(
      "authorizedAccounts",
      "authorizedAccounts(address):(bool)",
      [ethereum.Value.fromAddress(_account)]
    );

    return result[0].toBoolean();
  }

  try_authorizedAccounts(_account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "authorizedAccounts",
      "authorizedAccounts(address):(bool)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authorizedAccounts1(): Array<Address> {
    let result = super.call(
      "authorizedAccounts",
      "authorizedAccounts():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_authorizedAccounts1(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "authorizedAccounts",
      "authorizedAccounts():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  collateralJoins(_cType: Bytes): Address {
    let result = super.call(
      "collateralJoins",
      "collateralJoins(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_cType)]
    );

    return result[0].toAddress();
  }

  try_collateralJoins(_cType: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "collateralJoins",
      "collateralJoins(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_cType)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  collateralJoinsList(): Array<Address> {
    let result = super.call(
      "collateralJoinsList",
      "collateralJoinsList():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_collateralJoinsList(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "collateralJoinsList",
      "collateralJoinsList():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  collateralTypesList(): Array<Bytes> {
    let result = super.call(
      "collateralTypesList",
      "collateralTypesList():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_collateralTypesList(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "collateralTypesList",
      "collateralTypesList():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  contractEnabled(): boolean {
    let result = super.call("contractEnabled", "contractEnabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_contractEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "contractEnabled",
      "contractEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deployCollateralJoin(_cType: Bytes, _collateral: Address): Address {
    let result = super.call(
      "deployCollateralJoin",
      "deployCollateralJoin(bytes32,address):(address)",
      [
        ethereum.Value.fromFixedBytes(_cType),
        ethereum.Value.fromAddress(_collateral)
      ]
    );

    return result[0].toAddress();
  }

  try_deployCollateralJoin(
    _cType: Bytes,
    _collateral: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployCollateralJoin",
      "deployCollateralJoin(bytes32,address):(address)",
      [
        ethereum.Value.fromFixedBytes(_cType),
        ethereum.Value.fromAddress(_collateral)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployDelegatableCollateralJoin(
    _cType: Bytes,
    _collateral: Address,
    _delegatee: Address
  ): Address {
    let result = super.call(
      "deployDelegatableCollateralJoin",
      "deployDelegatableCollateralJoin(bytes32,address,address):(address)",
      [
        ethereum.Value.fromFixedBytes(_cType),
        ethereum.Value.fromAddress(_collateral),
        ethereum.Value.fromAddress(_delegatee)
      ]
    );

    return result[0].toAddress();
  }

  try_deployDelegatableCollateralJoin(
    _cType: Bytes,
    _collateral: Address,
    _delegatee: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployDelegatableCollateralJoin",
      "deployDelegatableCollateralJoin(bytes32,address,address):(address)",
      [
        ethereum.Value.fromFixedBytes(_cType),
        ethereum.Value.fromAddress(_collateral),
        ethereum.Value.fromAddress(_delegatee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  safeEngine(): Address {
    let result = super.call("safeEngine", "safeEngine():(address)", []);

    return result[0].toAddress();
  }

  try_safeEngine(): ethereum.CallResult<Address> {
    let result = super.tryCall("safeEngine", "safeEngine():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _safeEngine(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAuthorizationCall extends ethereum.Call {
  get inputs(): AddAuthorizationCall__Inputs {
    return new AddAuthorizationCall__Inputs(this);
  }

  get outputs(): AddAuthorizationCall__Outputs {
    return new AddAuthorizationCall__Outputs(this);
  }
}

export class AddAuthorizationCall__Inputs {
  _call: AddAuthorizationCall;

  constructor(call: AddAuthorizationCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAuthorizationCall__Outputs {
  _call: AddAuthorizationCall;

  constructor(call: AddAuthorizationCall) {
    this._call = call;
  }
}

export class DeployCollateralJoinCall extends ethereum.Call {
  get inputs(): DeployCollateralJoinCall__Inputs {
    return new DeployCollateralJoinCall__Inputs(this);
  }

  get outputs(): DeployCollateralJoinCall__Outputs {
    return new DeployCollateralJoinCall__Outputs(this);
  }
}

export class DeployCollateralJoinCall__Inputs {
  _call: DeployCollateralJoinCall;

  constructor(call: DeployCollateralJoinCall) {
    this._call = call;
  }

  get _cType(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _collateral(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DeployCollateralJoinCall__Outputs {
  _call: DeployCollateralJoinCall;

  constructor(call: DeployCollateralJoinCall) {
    this._call = call;
  }

  get _collateralJoin(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployDelegatableCollateralJoinCall extends ethereum.Call {
  get inputs(): DeployDelegatableCollateralJoinCall__Inputs {
    return new DeployDelegatableCollateralJoinCall__Inputs(this);
  }

  get outputs(): DeployDelegatableCollateralJoinCall__Outputs {
    return new DeployDelegatableCollateralJoinCall__Outputs(this);
  }
}

export class DeployDelegatableCollateralJoinCall__Inputs {
  _call: DeployDelegatableCollateralJoinCall;

  constructor(call: DeployDelegatableCollateralJoinCall) {
    this._call = call;
  }

  get _cType(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _collateral(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _delegatee(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DeployDelegatableCollateralJoinCall__Outputs {
  _call: DeployDelegatableCollateralJoinCall;

  constructor(call: DeployDelegatableCollateralJoinCall) {
    this._call = call;
  }

  get _collateralJoin(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DisableCollateralJoinCall extends ethereum.Call {
  get inputs(): DisableCollateralJoinCall__Inputs {
    return new DisableCollateralJoinCall__Inputs(this);
  }

  get outputs(): DisableCollateralJoinCall__Outputs {
    return new DisableCollateralJoinCall__Outputs(this);
  }
}

export class DisableCollateralJoinCall__Inputs {
  _call: DisableCollateralJoinCall;

  constructor(call: DisableCollateralJoinCall) {
    this._call = call;
  }

  get _cType(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DisableCollateralJoinCall__Outputs {
  _call: DisableCollateralJoinCall;

  constructor(call: DisableCollateralJoinCall) {
    this._call = call;
  }
}

export class DisableContractCall extends ethereum.Call {
  get inputs(): DisableContractCall__Inputs {
    return new DisableContractCall__Inputs(this);
  }

  get outputs(): DisableContractCall__Outputs {
    return new DisableContractCall__Outputs(this);
  }
}

export class DisableContractCall__Inputs {
  _call: DisableContractCall;

  constructor(call: DisableContractCall) {
    this._call = call;
  }
}

export class DisableContractCall__Outputs {
  _call: DisableContractCall;

  constructor(call: DisableContractCall) {
    this._call = call;
  }
}

export class RemoveAuthorizationCall extends ethereum.Call {
  get inputs(): RemoveAuthorizationCall__Inputs {
    return new RemoveAuthorizationCall__Inputs(this);
  }

  get outputs(): RemoveAuthorizationCall__Outputs {
    return new RemoveAuthorizationCall__Outputs(this);
  }
}

export class RemoveAuthorizationCall__Inputs {
  _call: RemoveAuthorizationCall;

  constructor(call: RemoveAuthorizationCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAuthorizationCall__Outputs {
  _call: RemoveAuthorizationCall;

  constructor(call: RemoveAuthorizationCall) {
    this._call = call;
  }
}
