import { AssetClass, EcosystemInfo } from '../generated/schema';
import { DeployCollateralJoin as DeployCollateralJoinEvent } from '../generated/CollateralJoinFactory/CollateralJoinFactory';
import { ByteArray } from '@graphprotocol/graph-ts';
import { constants } from '@amxx/graphprotocol-utils';

export function handleDeployCollateralJoin(event: DeployCollateralJoinEvent): void {
    const collateralType = event.params._cType
    const assetClassIdHex = collateralType.toHexString()
    const blockTimeStamp = event.block.timestamp
    const transactionHash = event.transaction.hash
    const collateralTypeName = ByteArray.fromHexString(collateralType.toHexString()).toString();
    const ecosystemInfoId = "ecosystemInfo"

    let assetClass = AssetClass.load(assetClassIdHex)
    if (!assetClass) {
        assetClass = new AssetClass(assetClassIdHex)
        assetClass.id = assetClassIdHex
        assetClass.collateralType = collateralType
        assetClass.collateralTypeName = collateralTypeName
        assetClass.collateral = event.params._collateral
        assetClass.collateralLocked = constants.BIGINT_ZERO
        assetClass.debtTokensHeld = constants.BIGINT_ZERO
        assetClass.activeVaults = constants.BIGINT_ZERO
        assetClass.createdTimeStamp = blockTimeStamp
        assetClass.transactionHash = transactionHash
        assetClass.save()
    }

    let ecosystemInfo = EcosystemInfo.load(ecosystemInfoId)
    if (!ecosystemInfo) {
        ecosystemInfo = new EcosystemInfo(ecosystemInfoId)
        ecosystemInfo.id = ecosystemInfoId
        ecosystemInfo.totalCollateralLocked = constants.BIGINT_ZERO
        ecosystemInfo.totalDebt = constants.BIGINT_ZERO
        ecosystemInfo.totalSafes = constants.BIGINT_ZERO
        ecosystemInfo.totalUserProxies = constants.BIGINT_ZERO
        ecosystemInfo.totalAssetClasses = constants.BIGINT_ZERO
    }
    ecosystemInfo.totalAssetClasses = ecosystemInfo.totalUserProxies.plus(constants.BIGINT_ONE)
    ecosystemInfo.save()
}