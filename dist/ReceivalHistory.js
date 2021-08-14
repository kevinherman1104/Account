"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionHistory_1 = require("./TransactionHistory");
class ReceivalHistory extends TransactionHistory_1.TransactionHistory {
    constructor(action, amount, fromAccount) {
        super(action, amount);
        this.action = action;
        this.amount = amount;
        this.fromAccount = fromAccount;
        this.date = Date();
        this.fromAccount = fromAccount;
    }
    toString() {
        return `${super.toString()} \ntransfer from: ${this.fromAccount.getName()}`;
    }
}
exports.ReceivalHistory = ReceivalHistory;
//# sourceMappingURL=ReceivalHistory.js.map