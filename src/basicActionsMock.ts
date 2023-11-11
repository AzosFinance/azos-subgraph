import { constants } from '@amxx/graphprotocol-utils';
import { AssetClass, EcosystemInfo, Safe, SafeAssetClass, SafeIdCounter, UserProxyAssetClassStatDeposit } from '../generated/schema';
import { CreateSafe as CreateSafeEvent } from './../generated/templates/BasicActionsMock/BasicActionsMock';

export function handleCreateSafe(event: CreateSafeEvent): void {
    const userId = event.params.user.toHexString()
    const collateralType = event.params.collateralType
    const collateralTypeIdHex = collateralType.toHexString()
    const safeIdCounterId = "safeIdCounter"
    const ecosystemInfoId = "ecosystemInfo"

    const amountCollateral = event.params.amountCollateral
    const amountCoin = event.params.amountCoin

    const blockTimeStamp = event.block.timestamp
    const transactionHash = event.transaction.hash

    let safeIdCounter = SafeIdCounter.load(safeIdCounterId)
    if (!safeIdCounter) {
        safeIdCounter = new SafeIdCounter(safeIdCounterId)
        safeIdCounter.id = safeIdCounterId
        safeIdCounter.idCounter = constants.BIGINT_ZERO
    }
    safeIdCounter.idCounter = safeIdCounter.idCounter.plus(constants.BIGINT_ONE)
    safeIdCounter.save()

    const currentSafeIdCounter = safeIdCounter.idCounter
    const safeId = currentSafeIdCounter.toString()
    const safeAssetClassId = safeId + "-" + collateralTypeIdHex
    const userProxyAssetClassStatDepositId = userId + "-" + collateralType.toHexString() + "-statDeposits"

    let safe = Safe.load(safeId)
    if (!safe) {
        safe = new Safe(safeId)
        safe.id = safeId
        safe.safeId = currentSafeIdCounter
        safe.user = event.params.user
        safe.amountCollateral = amountCollateral
        safe.amountCoin = amountCoin
        safe.collateralType = event.params.collateralType
        safe.assetClass = collateralTypeIdHex
        safe.transactionHash = transactionHash
        safe.createdTimeStamp = blockTimeStamp
        safe.save()
    }

    let safeAssetClass = SafeAssetClass.load(safeAssetClassId)
    if (!safeAssetClass) {
        safeAssetClass = new SafeAssetClass(safeAssetClassId)
        safeAssetClass.id = safeAssetClassId
        safeAssetClass.safe = safeId
        safeAssetClass.assetClass = collateralTypeIdHex
        safeAssetClass.save()
    }

    let assetClass = AssetClass.load(collateralTypeIdHex)
    if (assetClass) {
        assetClass.collateralLocked = assetClass.collateralLocked.plus(amountCollateral)
        assetClass.debtTokensHeld = assetClass.debtTokensHeld.plus(amountCoin)
        assetClass.activeSafes = assetClass.activeSafes.plus(constants.BIGINT_ONE)
        assetClass.save()
    }

    let userProxyAssetClassStatDeposit = UserProxyAssetClassStatDeposit.load(userProxyAssetClassStatDepositId)
    if (!userProxyAssetClassStatDeposit) {
        userProxyAssetClassStatDeposit = new UserProxyAssetClassStatDeposit(userProxyAssetClassStatDepositId)
        userProxyAssetClassStatDeposit.id = userProxyAssetClassStatDepositId
        userProxyAssetClassStatDeposit.userProxy = userId
        userProxyAssetClassStatDeposit.assetClass = collateralType.toHexString()
        userProxyAssetClassStatDeposit.collateralLocked = constants.BIGINT_ZERO
        userProxyAssetClassStatDeposit.debtTokensHeld = constants.BIGINT_ZERO
        userProxyAssetClassStatDeposit.activeSafes = constants.BIGINT_ZERO
    }
    userProxyAssetClassStatDeposit.collateralLocked = userProxyAssetClassStatDeposit.collateralLocked.plus(amountCollateral)
    userProxyAssetClassStatDeposit.debtTokensHeld = userProxyAssetClassStatDeposit.debtTokensHeld.plus(amountCoin)
    userProxyAssetClassStatDeposit.activeSafes = userProxyAssetClassStatDeposit.activeSafes.plus(constants.BIGINT_ONE)
    userProxyAssetClassStatDeposit.save()

    let ecosystemInfo = EcosystemInfo.load(ecosystemInfoId)
    if (ecosystemInfo) {
        ecosystemInfo.totalCollateralLocked = ecosystemInfo.totalCollateralLocked.plus(amountCollateral)
        ecosystemInfo.totalDebt = ecosystemInfo.totalDebt.plus(amountCoin)
        ecosystemInfo.totalSafes = ecosystemInfo.totalSafes.plus(constants.BIGINT_ONE)
        ecosystemInfo.save()
    }
}