import { AssetClass } from '../generated/schema';
import { DeployCollateralJoin as DeployCollateralJoinEvent } from '../generated/CollateralJoinFactory/CollateralJoinFactory';

export function handleDeployCollateralJoin(event: DeployCollateralJoinEvent): void {
    const assetClassId = event.params._cType.toHexString()
    const blockTimeStamp = event.block.timestamp
    const transactionHash = event.transaction.hash

    let assetClass = AssetClass.load(assetClassId)
    if (!assetClass) {
        assetClass = new AssetClass(assetClassId)
        assetClass.id = assetClassId
        assetClass.collateralType = event.params._cType
        assetClass.collateral = event.params._collateral
        assetClass.createdTimeStamp = blockTimeStamp
        assetClass.transactionHash = transactionHash
        assetClass.save()
    }
}