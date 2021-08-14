 import {ReceivalHistory} from "./ReceivalHistory"
 import {TransactionHistory} from "./TransactionHistory"
 import {TransferHistory} from "./TransferHistory"
 
 export class Account {
    name: string;
    balance: number;
    transactionHistories: Array<TransactionHistory>;
    transferHistories: Array<TransferHistory>;
    receivalHistories: Array<ReceivalHistory>;
    constructor(name: string) {
        this.name = name
        this.balance = 0
        this.transactionHistories = Array<TransactionHistory>()
        this.transferHistories = Array<TransferHistory>()
        this.receivalHistories = Array<ReceivalHistory>()
    }
    deposit(amount: number) {
        this.balance += amount
    }
    withdraw(amount: number) {
        this.balance -= amount
    }
    transfer(amount: number, toAccount: Account) {
        this.balance -= amount
    }
    receive(amount: number, fromAccount: Account) {
        this.balance += amount
    }
    }