import { UserProxy } from './../generated/schema';
import { BasicActionsMock } from '../generated/templates'
import { Created as CreatedEvent } from './../generated/HaiProxyFactory/HaiProxyFactory';

export function handleCreated(event: CreatedEvent): void {
    const userProxyId = event.params._owner.toHexString()
    const blockTimeStamp = event.block.timestamp
    const transactionHash = event.transaction.hash

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
}