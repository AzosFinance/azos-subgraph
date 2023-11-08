import { EcosystemInfo, UserProxy } from './../generated/schema';
import { BasicActionsMock } from '../generated/templates'
import { Created as CreatedEvent } from './../generated/HaiProxyFactory/HaiProxyFactory';
import { constants } from '@amxx/graphprotocol-utils';

export function handleCreated(event: CreatedEvent): void {
    const userProxyId = event.params._owner.toHexString()
    const blockTimeStamp = event.block.timestamp
    const transactionHash = event.transaction.hash
    const ecosystemInfoId = "ecosystemInfo"

    BasicActionsMock.create(event.params._proxy)

    let userProxy = UserProxy.load(userProxyId)
    if (!userProxy) {
        userProxy = new UserProxy(userProxyId)
        userProxy.id = userProxyId
        userProxy.sender = event.params._sender
        userProxy.owner = event.params._owner
        userProxy.proxy = event.params._proxy
        userProxy.createdTimeStamp = blockTimeStamp
        userProxy.transactionHash = transactionHash
        userProxy.save()
    }

    let ecosystemInfo = EcosystemInfo.load(ecosystemInfoId)
    if (ecosystemInfo) {
        ecosystemInfo.totalUserProxies = ecosystemInfo.totalUserProxies.plus(constants.BIGINT_ONE)
        ecosystemInfo.save()
    }
}