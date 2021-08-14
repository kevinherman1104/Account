import { Account } from "./Account"

export class ReceivalHistory {
    action: number
    amount: number
    date: string
    fromAccount: Account
    constructor(action: number, amount: number, fromAccount: Account) {
        this.action = action
        this.amount = amount
        this.date = Date()
        this.fromAccount = fromAccount
    }
    toString(): string {
        return `@${this.action} [${this.date}] - ${this.amount}
        ${this.fromAccount}`
    }
}
        