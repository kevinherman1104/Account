import { Account } from "./Account";
import { TransactionHistory } from "./TransactionHistory";
export declare class ReceivalHistory extends TransactionHistory {
    protected action: string;
    protected amount: number;
    protected fromAccount: Account;
    protected date: string;
    constructor(action: string, amount: number, fromAccount: Account);
    toString(): string;
}
