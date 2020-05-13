interface IStrategy {
    execute(a: number, b: number): number;
}

class ConcreteStrategy_A implements IStrategy {
    public execute(a, b): number {
        return a + b;
    }
}

class ConcreteStrategy_B implements IStrategy {
    public execute(a, b): number {
        return a - b;
    }
}

class Context {

    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    public doSomething(a, b): number {
        return this.strategy.execute(a, b);
    }
}

// main
const context = new Context(new ConcreteStrategy_A());

console.log(context.doSomething(3, 3));

context.setStrategy(new ConcreteStrategy_B());

console.log(context.doSomething(3, 3))

