import { constants } from '@amxx/graphprotocol-utils';
import { AssetClass, EcosystemInfo, Safe, SafeAssetClass, SafeIdCounter, SafeUserProxy } from '../generated/schema';
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
    const safeId = currentSafeIdCounter.toHexString()
    const safeUserProxyId = safeId + "-" + userId
    const safeAssetClassId = safeId + "-" + collateralTypeIdHex

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

    let safeUserProxy = SafeUserProxy.load(safeUserProxyId)
    if (!safeUserProxy) {
        safeUserProxy = new SafeUserProxy(safeUserProxyId)
        safeUserProxy.id = safeUserProxyId
        safeUserProxy.safe = safeId
        safeUserProxy.userProxy = userId
        safeUserProxy.save()
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
        assetClass.activeVaults = assetClass.activeVaults.plus(constants.BIGINT_ONE)
        assetClass.save()
    }

    let ecosystemInfo = EcosystemInfo.load(ecosystemInfoId)
    if (ecosystemInfo) {
        ecosystemInfo.totalCollateralLocked = ecosystemInfo.totalCollateralLocked.plus(amountCollateral)
        ecosystemInfo.totalDebt = ecosystemInfo.totalDebt.plus(amountCoin)
        ecosystemInfo.totalUserProxies = ecosystemInfo.totalUserProxies.plus(constants.BIGINT_ONE)
        ecosystemInfo.save()
    }
}