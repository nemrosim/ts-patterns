interface IStrategy {
    execute(): string;
}

class ConcreteStrategy_A implements IStrategy {
    public execute(): string {
        return "ConcreteStrategy_A";
    }
}

class ConcreteStrategy_B implements IStrategy {
    public execute(): string {
        return "ConcreteStrategy_B";
    }
}

class Context {

    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy){
        this.strategy = strategy;
    }

    public doSomething(): string {
        return this.strategy.execute();
    }
}

const context = new Context(new ConcreteStrategy_A());
console.log(context.doSomething());

context.setStrategy(new ConcreteStrategy_B())
console.log(context.doSomething())

