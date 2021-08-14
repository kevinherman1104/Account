import { Account } from "./Account"
import { TransactionHistory } from "./TransactionHistory"

export class ReceivalHistory extends TransactionHistory {
    protected date: string
    constructor(protected action: string, protected amount: number, protected fromAccount: Account) {
        super(action, amount);
        this.date = Date();
        this.fromAccount = fromAccount;
    }
    toString(): string {
        return `${super.toString()} recieve transfer from: ${this.fromAccount.getName()}`
    }
}
        