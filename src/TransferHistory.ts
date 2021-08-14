import { Account } from "./Account"
import { TransactionHistory } from "./TransactionHistory"

export class TransferHistory extends TransactionHistory {
    protected date: string
    constructor(protected action: string, protected amount: number, protected toAccount: Account) {
        super(action, amount);
        this.date = Date();
        this.toAccount = toAccount;
    }
    toString(): string {
        return `${super.toString()} \ntransfer to: ${this.toAccount.getName()}`
    }
}
    