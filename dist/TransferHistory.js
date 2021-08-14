"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionHistory_1 = require("./TransactionHistory");
class TransferHistory extends TransactionHistory_1.TransactionHistory {
    constructor(action, amount, toAccount) {
        super(action, amount);
        this.action = action;
        this.amount = amount;
        this.toAccount = toAccount;
        this.date = Date();
        this.toAccount = toAccount;
    }
    toString() {
        return `${super.toString()} transfer to: ${this.toAccount.getName()}`;
    }
}
exports.TransferHistory = TransferHistory;
