import { Account } from "./Account"

export class TransferHistory {
    action: number
    amount: number
    date: string
    toAccount: Account
    constructor(action: number, amount: number, toAccount: Account) {
        this.action = action
        this.amount = amount
        this.date = Date()
        this.toAccount = toAccount
    }
    toString(): string {
        return `@${this.action} [${this.date}] - ${this.amount} ${this.toAccount}`
    }
}
    