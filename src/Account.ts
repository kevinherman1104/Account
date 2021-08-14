 import {ReceivalHistory} from "./ReceivalHistory"
 import {TransactionHistory} from "./TransactionHistory"
 import {TransferHistory} from "./TransferHistory"
 
 const actions = ['deposit', 'withdraw', 'transfer', 'receive']

 export class Account {

    private _name: string;
    private _balance: number;
    private _transactionHistories: Array<TransactionHistory>;
    private _transferHistories: Array<TransferHistory>;
    private _receivalHistories: Array<ReceivalHistory>;

    constructor(name: string) {
        this._name = name
        this._balance = 0
        this._transactionHistories = Array<TransactionHistory>()
        this._transferHistories = Array<TransferHistory>()
        this._receivalHistories = Array<ReceivalHistory>()
    }
    getName(): string{
        return this._name;
        
    }
    getBalance(): number{
        return this._balance;
    }
    
    deposit(amount: number):void {
        this._balance += amount;
        this._transactionHistories.push(new TransactionHistory(actions[0], amount));
        this.writeHistory("Tranasaction");
    }
    withdraw(amount: number): void {
        this._balance -= amount;
        this._transactionHistories.push(new TransactionHistory(actions[1], amount));
        this.writeHistory("Transaction");
    }
    transfer(amount: number, toAccount: Account):void {
        toAccount._balance -= amount;
        this._transactionHistories.push(new TransactionHistory(actions[2], amount));
        this._transferHistories.push(new TransferHistory(actions[2], amount, toAccount))
        this.writeHistory("Transfer");
        toAccount.receive(amount, this);

        
    }
    receive(amount: number, fromAccount: Account):void {
        fromAccount._balance += amount;
        this._transactionHistories.push(new TransactionHistory(actions[3], amount));
        this._receivalHistories.push(new ReceivalHistory(actions[3], amount, fromAccount))
        this.writeHistory("Receival");
    }

    writeHistory(typeHistory: string){
        switch (typeHistory){
            case "Transaction":
                console.log(`\n${this._name}'s transaction history: \n`);
                this._transactionHistories.forEach(e => console.log( e.toString()));
                break;
            case "Transfer":
                console.log(`\n${this._name}'s transfer history: \n`);
                this._transferHistories.forEach(e => console.log( e.toString()));
                break;
            case "Receival":
                console.log(`\n${this._name}'s Receival history: \n`);
                this._receivalHistories.forEach(e => console.log( e.toString()));
                break
            default:
                console.log("\nERROR TYPE OF HISTORY");
        }

    }
}