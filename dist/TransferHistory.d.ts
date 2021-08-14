import { Account } from "./Account";
import { TransactionHistory } from "./TransactionHistory";
export declare class TransferHistory extends TransactionHistory {
    protected action: string;
    protected amount: number;
    protected toAccount: Account;
    protected date: string;
    constructor(action: string, amount: number, toAccount: Account);
    toString(): string;
}
