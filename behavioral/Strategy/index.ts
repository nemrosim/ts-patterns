import {IStrategy} from './IStrategy';
import {Context} from './Context';

class StrategyA implements IStrategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class StrategyB implements IStrategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new StrategyA());
context.doSomeBusinessLogic();

context.setStrategy(new StrategyB());
context.doSomeBusinessLogic();
