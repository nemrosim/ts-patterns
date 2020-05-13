interface IStrategy {
    execute(data: string[]): string[];
}

export class Strategy_Array_Sort implements IStrategy {
    public execute(data: string[]): string[] {
        return data.sort();
    }
}

export class Strategy_Array_Reverse implements IStrategy {
    public execute(data: string[]): string[] {
        return data.reverse();
    }
}

export class Context {

    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy){
        this.strategy = strategy;
    }

    public doSomething(data: string[]): string[] {
        return this.strategy.execute(data);
    }
}
