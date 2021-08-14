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
//Answer to Question 
// 1. Yes, since if we implement this in real life scenario, it is best practice to encapsulate
// private informations such as a persons balance, transaction history, transfer history and receival history.
// But, in a caase where i implement inheritance for Transaction history, transfer history and receival history classes. All the variables inherited
// from parent class (Transaction history) are set to protected so that only subclasses and parent class can access the protected properties. 
// (Cause if we use private for transaction history parent class attributes their subclasses cannot inherit the private atttributes.)
// 2. 
