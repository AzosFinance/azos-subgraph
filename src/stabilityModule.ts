import { StabilityModule } from '../generated/schema';
import { ExpandDebt as ExpandDebtEvent, ContractDebt as ContractDebtEvent, Deposit as DepositEvent } from './../generated/StabilityModule/StabilityModule';
import { constants } from '@amxx/graphprotocol-utils';

export function handleExpandDebt(event: ExpandDebtEvent): void {
    const stabilityModuleId = event.address.toHexString()
    const blockTimeStamp = event.block.timestamp

    let stabilityModule = StabilityModule.load(stabilityModuleId)
    if (!stabilityModule) {
        stabilityModule = new StabilityModule(stabilityModuleId)
        stabilityModule.id = stabilityModuleId
        stabilityModule.assetSymbol = "USDC"
        stabilityModule.balance = constants.BIGINT_ZERO
        stabilityModule.debt = constants.BIGINT_ZERO
        stabilityModule.deposit = constants.BIGINT_ZERO
        stabilityModule.createdTimeStamp = blockTimeStamp
    }
    stabilityModule.balance = event.params.newBalance
    stabilityModule.debt = event.params.newDebt
    stabilityModule.updatedTimeStamp = blockTimeStamp
    stabilityModule.save()
}

export function handleContractDebt(event: ContractDebtEvent): void {
    const stabilityModuleId = event.address.toHexString()
    const blockTimeStamp = event.block.timestamp

    let stabilityModule = StabilityModule.load(stabilityModuleId)
    if (!stabilityModule) {
        stabilityModule = new StabilityModule(stabilityModuleId)
        stabilityModule.id = stabilityModuleId
        stabilityModule.assetSymbol = "USDC"
        stabilityModule.balance = constants.BIGINT_ZERO
        stabilityModule.debt = constants.BIGINT_ZERO
        stabilityModule.deposit = constants.BIGINT_ZERO
        stabilityModule.createdTimeStamp = blockTimeStamp
    }
    stabilityModule.balance = event.params.newBalance
    stabilityModule.debt = event.params.newDebt
    stabilityModule.updatedTimeStamp = blockTimeStamp
    stabilityModule.save()
}

export function handleDeposit(event: DepositEvent): void {
    const stabilityModuleId = event.address.toHexString()
    const blockTimeStamp = event.block.timestamp
    const amount = event.params.amount

    let stabilityModule = StabilityModule.load(stabilityModuleId)
    if (!stabilityModule) {
        stabilityModule = new StabilityModule(stabilityModuleId)
        stabilityModule.id = stabilityModuleId
        stabilityModule.assetSymbol = "USDC"
        stabilityModule.balance = constants.BIGINT_ZERO
        stabilityModule.debt = constants.BIGINT_ZERO
        stabilityModule.deposit = constants.BIGINT_ZERO
        stabilityModule.createdTimeStamp = blockTimeStamp
    }
    stabilityModule.deposit = amount
    stabilityModule.updatedTimeStamp = blockTimeStamp
    stabilityModule.save()
}