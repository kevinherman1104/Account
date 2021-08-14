"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionHistory {
    constructor(action, amount) {
        this.action = action;
        this.amount = amount;
        this.date = Date();
    }
    toString() {
        return `@${this.action} [${this.date}] - ${this.amount}`;
    }
}
exports.TransactionHistory = TransactionHistory;
