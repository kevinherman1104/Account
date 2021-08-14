export declare class TransactionHistory {
    protected action: string;
    protected amount: number;
    protected date: string;
    constructor(action: string, amount: number);
    toString(): string;
}
