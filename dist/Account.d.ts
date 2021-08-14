export declare class Account {
    private _name;
    private _balance;
    private _transactionHistories;
    private _transferHistories;
    private _receivalHistories;
    constructor(name: string);
    getName(): string;
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    transfer(amount: number, toAccount: Account): void;
    receive(amount: number, fromAccount: Account): void;
    writeHistory(typeHistory: string): void;
}
