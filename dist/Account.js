"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReceivalHistory_1 = require("./ReceivalHistory");
const TransactionHistory_1 = require("./TransactionHistory");
const TransferHistory_1 = require("./TransferHistory");
const actions = ['deposit', 'withdraw', 'transfer', 'receive'];
class Account {
    constructor(name) {
        this._name = name;
        this._balance = 0;
        this._transactionHistories = Array();
        this._transferHistories = Array();
        this._receivalHistories = Array();
    }
    getName() {
        return this._name;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        this._balance += amount;
        this._transactionHistories.push(new TransactionHistory_1.TransactionHistory(actions[0], amount));
        this.writeHistory("Transaction");
    }
    withdraw(amount) {
        this._balance -= amount;
        this._transactionHistories.push(new TransactionHistory_1.TransactionHistory(actions[1], amount));
        this.writeHistory("Transaction");
    }
    transfer(amount, toAccount) {
        toAccount._balance -= amount;
        this._transactionHistories.push(new TransactionHistory_1.TransactionHistory(actions[2], amount));
        this._transferHistories.push(new TransferHistory_1.TransferHistory(actions[2], amount, toAccount));
        this.writeHistory("Transfer");
        toAccount.receive(amount, this);
    }
    receive(amount, fromAccount) {
        fromAccount._balance += amount;
        this._transactionHistories.push(new TransactionHistory_1.TransactionHistory(actions[3], amount));
        this._receivalHistories.push(new ReceivalHistory_1.ReceivalHistory(actions[3], amount, fromAccount));
        this.writeHistory("Receival");
    }
    writeHistory(typeHistory) {
        switch (typeHistory) {
            case "Transaction":
                console.log(`\n${this._name}'s transaction history: \n`);
                this._transactionHistories.forEach(e => console.log(e.toString()));
                break;
            case "Transfer":
                console.log(`\n${this._name}'s transfer history: \n`);
                this._transferHistories.forEach(e => console.log(e.toString()));
                break;
            case "Receival":
                console.log(`\n${this._name}'s Receival history: \n`);
                this._receivalHistories.forEach(e => console.log(e.toString()));
                break;
            default:
                console.log("\nERROR TYPE OF HISTORY");
        }
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map