export class TransactionHistory {
    action: number
    amount: number
    date: string
    constructor(action: number, amount: number) {
        this.action = action
        this.amount = amount
        this.date = Date()
    }
    toString(): string {
        return `@${this.action} [${this.date}] - ${this.amount}`
    }
}
    