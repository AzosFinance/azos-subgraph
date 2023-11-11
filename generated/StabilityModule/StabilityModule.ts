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

export class AddAdapter extends ethereum.Event {
  get params(): AddAdapter__Params {
    return new AddAdapter__Params(this);
  }
}

export class AddAdapter__Params {
  _event: AddAdapter;

  constructor(event: AddAdapter) {
    this._event = event;
  }

  get adapterName(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get adapter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get authorized(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

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

export class AuthorizedCollateral extends ethereum.Event {
  get params(): AuthorizedCollateral__Params {
    return new AuthorizedCollateral__Params(this);
  }
}

export class AuthorizedCollateral__Params {
  _event: AuthorizedCollateral;

  constructor(event: AuthorizedCollateral) {
    this._event = event;
  }

  get authorizedCollateral(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BurnBalance extends ethereum.Event {
  get params(): BurnBalance__Params {
    return new BurnBalance__Params(this);
  }
}

export class BurnBalance__Params {
  _event: BurnBalance;

  constructor(event: BurnBalance) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ChangeTreasury extends ethereum.Event {
  get params(): ChangeTreasury__Params {
    return new ChangeTreasury__Params(this);
  }
}

export class ChangeTreasury__Params {
  _event: ChangeTreasury;

  constructor(event: ChangeTreasury) {
    this._event = event;
  }

  get newTreasury(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get authorized(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract extends ethereum.Event {
  get params(): Contract__Params {
    return new Contract__Params(this);
  }
}

export class Contract__Params {
  _event: Contract;

  constructor(event: Contract) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get burnAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get returnData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class ContractDebt extends ethereum.Event {
  get params(): ContractDebt__Params {
    return new ContractDebt__Params(this);
  }
}

export class ContractDebt__Params {
  _event: ContractDebt;

  constructor(event: ContractDebt) {
    this._event = event;
  }

  get previousDebt(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newDebt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get previousBalance(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newBalance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DebtCeilingChange extends ethereum.Event {
  get params(): DebtCeilingChange__Params {
    return new DebtCeilingChange__Params(this);
  }
}

export class DebtCeilingChange__Params {
  _event: DebtCeilingChange;

  constructor(event: DebtCeilingChange) {
    this._event = event;
  }

  get debtCeiling(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Expand extends ethereum.Event {
  get params(): Expand__Params {
    return new Expand__Params(this);
  }
}

export class Expand__Params {
  _event: Expand;

  constructor(event: Expand) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get burnAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get returnData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class ExpandDebt extends ethereum.Event {
  get params(): ExpandDebt__Params {
    return new ExpandDebt__Params(this);
  }
}

export class ExpandDebt__Params {
  _event: ExpandDebt;

  constructor(event: ExpandDebt) {
    this._event = event;
  }

  get previousDebt(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newDebt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get previousBalance(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newBalance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class KeeperFee extends ethereum.Event {
  get params(): KeeperFee__Params {
    return new KeeperFee__Params(this);
  }
}

export class KeeperFee__Params {
  _event: KeeperFee;

  constructor(event: KeeperFee) {
    this._event = event;
  }

  get newFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class KeeperFeePaid extends ethereum.Event {
  get params(): KeeperFeePaid__Params {
    return new KeeperFeePaid__Params(this);
  }
}

export class KeeperFeePaid__Params {
  _event: KeeperFeePaid;

  constructor(event: KeeperFeePaid) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get keeper(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class MaxDeposit extends ethereum.Event {
  get params(): MaxDeposit__Params {
    return new MaxDeposit__Params(this);
  }
}

export class MaxDeposit__Params {
  _event: MaxDeposit;

  constructor(event: MaxDeposit) {
    this._event = event;
  }

  get maxDeposit(): BigInt {
    return this._event.parameters[0].value.toBigInt();
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

export class WindDown extends ethereum.Event {
  get params(): WindDown__Params {
    return new WindDown__Params(this);
  }
}

export class WindDown__Params {
  _event: WindDown;

  constructor(event: WindDown) {
    this._event = event;
  }

  get treasury(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateralAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get coinAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get authorized(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class StabilityModule extends ethereum.SmartContract {
  static bind(address: Address): StabilityModule {
    return new StabilityModule("StabilityModule", address);
  }

  _scaleFromSystemCoin(amount: BigInt): BigInt {
    let result = super.call(
      "_scaleFromSystemCoin",
      "_scaleFromSystemCoin(uint256):(int256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );

    return result[0].toBigInt();
  }

  try__scaleFromSystemCoin(amount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_scaleFromSystemCoin",
      "_scaleFromSystemCoin(uint256):(int256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _scaleToSystemCoin(amount: BigInt): BigInt {
    let result = super.call(
      "_scaleToSystemCoin",
      "_scaleToSystemCoin(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );

    return result[0].toBigInt();
  }

  try__scaleToSystemCoin(amount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_scaleToSystemCoin",
      "_scaleToSystemCoin(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  authorizedCollateral(): Address {
    let result = super.call(
      "authorizedCollateral",
      "authorizedCollateral():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_authorizedCollateral(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "authorizedCollateral",
      "authorizedCollateral():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  basisFee(): BigInt {
    let result = super.call("basisFee", "basisFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_basisFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("basisFee", "basisFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  debtCeiling(): BigInt {
    let result = super.call("debtCeiling", "debtCeiling():(uint256)", []);

    return result[0].toBigInt();
  }

  try_debtCeiling(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("debtCeiling", "debtCeiling():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAdapter(adapterName_: Bytes): Address {
    let result = super.call("getAdapter", "getAdapter(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(adapterName_)
    ]);

    return result[0].toAddress();
  }

  try_getAdapter(adapterName_: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("getAdapter", "getAdapter(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(adapterName_)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDebt(): BigInt {
    let result = super.call("getDebt", "getDebt():(int256)", []);

    return result[0].toBigInt();
  }

  try_getDebt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDebt", "getDebt():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDeposits(): BigInt {
    let result = super.call("getDeposits", "getDeposits():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getDeposits(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDeposits", "getDeposits():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxDeposit(): BigInt {
    let result = super.call("maxDeposit", "maxDeposit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxDeposit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxDeposit", "maxDeposit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  scalingFactor(): BigInt {
    let result = super.call("scalingFactor", "scalingFactor():(uint256)", []);

    return result[0].toBigInt();
  }

  try_scalingFactor(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "scalingFactor",
      "scalingFactor():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  systemCoin(): Address {
    let result = super.call("systemCoin", "systemCoin():(address)", []);

    return result[0].toAddress();
  }

  try_systemCoin(): ethereum.CallResult<Address> {
    let result = super.tryCall("systemCoin", "systemCoin():(address)", []);
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

  get authorizedCollateral_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get adapter_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get adapterName_(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get treasury_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get systemCoin_(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get governance_(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get maxDeposit_(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get debtCeiling_(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get basisFee_(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get router(): Address {
    return this._call.inputValues[9].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAdapterCall extends ethereum.Call {
  get inputs(): AddAdapterCall__Inputs {
    return new AddAdapterCall__Inputs(this);
  }

  get outputs(): AddAdapterCall__Outputs {
    return new AddAdapterCall__Outputs(this);
  }
}

export class AddAdapterCall__Inputs {
  _call: AddAdapterCall;

  constructor(call: AddAdapterCall) {
    this._call = call;
  }

  get adapterName_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get adapter_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddAdapterCall__Outputs {
  _call: AddAdapterCall;

  constructor(call: AddAdapterCall) {
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

export class ChangeBasisFeeCall extends ethereum.Call {
  get inputs(): ChangeBasisFeeCall__Inputs {
    return new ChangeBasisFeeCall__Inputs(this);
  }

  get outputs(): ChangeBasisFeeCall__Outputs {
    return new ChangeBasisFeeCall__Outputs(this);
  }
}

export class ChangeBasisFeeCall__Inputs {
  _call: ChangeBasisFeeCall;

  constructor(call: ChangeBasisFeeCall) {
    this._call = call;
  }

  get newBasisFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeBasisFeeCall__Outputs {
  _call: ChangeBasisFeeCall;

  constructor(call: ChangeBasisFeeCall) {
    this._call = call;
  }
}

export class ChangeDebtCeilingCall extends ethereum.Call {
  get inputs(): ChangeDebtCeilingCall__Inputs {
    return new ChangeDebtCeilingCall__Inputs(this);
  }

  get outputs(): ChangeDebtCeilingCall__Outputs {
    return new ChangeDebtCeilingCall__Outputs(this);
  }
}

export class ChangeDebtCeilingCall__Inputs {
  _call: ChangeDebtCeilingCall;

  constructor(call: ChangeDebtCeilingCall) {
    this._call = call;
  }

  get newDebtCeiling(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeDebtCeilingCall__Outputs {
  _call: ChangeDebtCeilingCall;

  constructor(call: ChangeDebtCeilingCall) {
    this._call = call;
  }
}

export class ChangeMaxDepositCall extends ethereum.Call {
  get inputs(): ChangeMaxDepositCall__Inputs {
    return new ChangeMaxDepositCall__Inputs(this);
  }

  get outputs(): ChangeMaxDepositCall__Outputs {
    return new ChangeMaxDepositCall__Outputs(this);
  }
}

export class ChangeMaxDepositCall__Inputs {
  _call: ChangeMaxDepositCall;

  constructor(call: ChangeMaxDepositCall) {
    this._call = call;
  }

  get newMaxDeposit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeMaxDepositCall__Outputs {
  _call: ChangeMaxDepositCall;

  constructor(call: ChangeMaxDepositCall) {
    this._call = call;
  }
}

export class ChangeTreasuryCall extends ethereum.Call {
  get inputs(): ChangeTreasuryCall__Inputs {
    return new ChangeTreasuryCall__Inputs(this);
  }

  get outputs(): ChangeTreasuryCall__Outputs {
    return new ChangeTreasuryCall__Outputs(this);
  }
}

export class ChangeTreasuryCall__Inputs {
  _call: ChangeTreasuryCall;

  constructor(call: ChangeTreasuryCall) {
    this._call = call;
  }

  get newTreasury_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeTreasuryCall__Outputs {
  _call: ChangeTreasuryCall;

  constructor(call: ChangeTreasuryCall) {
    this._call = call;
  }
}

export class ContractAndSellCall extends ethereum.Call {
  get inputs(): ContractAndSellCall__Inputs {
    return new ContractAndSellCall__Inputs(this);
  }

  get outputs(): ContractAndSellCall__Outputs {
    return new ContractAndSellCall__Outputs(this);
  }
}

export class ContractAndSellCall__Inputs {
  _call: ContractAndSellCall;

  constructor(call: ContractAndSellCall) {
    this._call = call;
  }

  get adapterName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ContractAndSellCall__Outputs {
  _call: ContractAndSellCall;

  constructor(call: ContractAndSellCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class ExpandAndBuyCall extends ethereum.Call {
  get inputs(): ExpandAndBuyCall__Inputs {
    return new ExpandAndBuyCall__Inputs(this);
  }

  get outputs(): ExpandAndBuyCall__Outputs {
    return new ExpandAndBuyCall__Outputs(this);
  }
}

export class ExpandAndBuyCall__Inputs {
  _call: ExpandAndBuyCall;

  constructor(call: ExpandAndBuyCall) {
    this._call = call;
  }

  get adapterName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get mintAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ExpandAndBuyCall__Outputs {
  _call: ExpandAndBuyCall;

  constructor(call: ExpandAndBuyCall) {
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

export class WindDownCall extends ethereum.Call {
  get inputs(): WindDownCall__Inputs {
    return new WindDownCall__Inputs(this);
  }

  get outputs(): WindDownCall__Outputs {
    return new WindDownCall__Outputs(this);
  }
}

export class WindDownCall__Inputs {
  _call: WindDownCall;

  constructor(call: WindDownCall) {
    this._call = call;
  }
}

export class WindDownCall__Outputs {
  _call: WindDownCall;

  constructor(call: WindDownCall) {
    this._call = call;
  }
}