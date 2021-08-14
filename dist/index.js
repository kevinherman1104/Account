"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
// Actions used in history
let person1 = new Account_1.Account("Kevin");
let person2 = new Account_1.Account("Alice");
person1.deposit(1000);
person2.deposit(2000);
person1.withdraw(50);
person2.withdraw(100);
person1.transfer(100, person2);
console.log("\nFINAL TRANSACTION STATUS : \n");
person1.writeHistory("Transaction");
person2.writeHistory("Transaction");
