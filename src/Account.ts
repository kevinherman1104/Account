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
        this.writeHistory("Transaction");
    }
    withdraw(amount: number): void {
        this._balance -= amount;
        this._transactionHistories.push(new TransactionHistory(actions[1], amount));
        this.writeHistory("Transaction");
    }
    // GENERIC APPROACH
    transfer<T extends Account>(amount: number, toAccount: T):void {
        toAccount._balance -= amount;
        this._transferHistories.push(new TransferHistory(actions[2], amount, toAccount))
        this._transactionHistories.push(new TransferHistory(actions[2], amount, toAccount));
        this.writeHistory("Transfer");
        toAccount.receive(amount, this);

        
    }
    
    receive<T extends Account>(amount: number, fromAccount: T):void {
        fromAccount._balance += amount;
        this._receivalHistories.push(new ReceivalHistory(actions[3], amount, fromAccount));
        this._transactionHistories.push(new ReceivalHistory(actions[3], amount, fromAccount));
        this.writeHistory("Receival");
    }

    writeHistory(typeHistory: string){
        switch (typeHistory){
            case "Transaction":
                console.log(`\n${this._name}'s transaction history:`);
                this._transactionHistories.forEach(e => console.log( e.toString()));
                break;
            case "Transfer":
                console.log(`\n${this._name}'s transfer history:`);
                this._transferHistories.forEach(e => console.log( e.toString()));
                break;
            case "Receival":
                console.log(`\n${this._name}'s Receival history:`);
                this._receivalHistories.forEach(e => console.log( e.toString()));
                break
            default:
                console.log("\nERROR TYPE OF HISTORY");
        }

    }
}