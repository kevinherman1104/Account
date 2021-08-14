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
    transfer<T extends Account>(amount: number, toAccount: T): void;
    receive<T extends Account>(amount: number, fromAccount: T): void;
    writeHistory(typeHistory: string): void;
}
