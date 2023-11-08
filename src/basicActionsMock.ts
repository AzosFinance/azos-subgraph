import { Safe, SafeAssetClass, SafeUserProxy, SafeUserProxyAssetClass } from '../generated/schema';
import { CreateSafe as CreateSafeEvent } from './../generated/templates/BasicActionsMock/BasicActionsMock';

export function handleCreateSafe(event: CreateSafeEvent): void {
    const blockTimeStamp = event.block.timestamp
    const transactionHash = event.transaction.hash
    const safeId = transactionHash.toHexString()
    const userId = event.params.user.toHexString()
    const collateralTypeId = event.params.collateralType.toHexString()
    const safeUserProxyId = safeId + "-" + userId
    const safeAssetClassId = safeId + "-" + collateralTypeId
    const safeUserProxyAssetClassId = safeUserProxyId + "-" + collateralTypeId

    let safe = Safe.load(safeId)
    if (!safe) {
        safe = new Safe(safeId)
        safe.id = safeId
        safe.user = event.params.user
        safe.amountCollateral = event.params.amountCollateral
        safe.amountCoin = event.params.amountCoin
        safe.collateralType = event.params.collateralType
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
        safeAssetClass.assetClass = collateralTypeId
        safeAssetClass.save()
    }

    let safeUserProxyAssetClass = SafeUserProxyAssetClass.load(safeUserProxyAssetClassId)
    if (!safeUserProxyAssetClass) {
        safeUserProxyAssetClass = new SafeUserProxyAssetClass(safeUserProxyAssetClassId)
        safeUserProxyAssetClass.id = safeUserProxyAssetClassId
        safeUserProxyAssetClass.safeUserProxy = safeUserProxyId
        safeUserProxyAssetClass.assetClass = collateralTypeId
        safeUserProxyAssetClass.userProxy = userId
        safeUserProxyAssetClass.save()
    }
}