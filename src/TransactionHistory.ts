export class TransactionHistory {
    protected date: string
    constructor(protected action: string, protected amount: number) {
        this.date = Date();
    }
    toString(): string {
        return `@${this.action} [${this.date}] - ${this.amount}`
    }
}
    