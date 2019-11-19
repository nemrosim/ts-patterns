import {IStrategy} from "./IStrategy";

export class Context {

    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    }
}
