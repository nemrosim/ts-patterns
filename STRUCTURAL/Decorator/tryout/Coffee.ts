interface I_Beverage {
    getDescription(): string;

    getCost(): number;
}

class Beverage implements I_Beverage {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return "Beverage";
    }

}

class BeverageDecorator implements I_Beverage {

    private beverage: I_Beverage;

    constructor(beverage: I_Beverage) {
        this.beverage = beverage;
    }

    getCost(): number {
        return this.beverage.getCost();
    }

    getDescription(): string {
        return this.beverage.getDescription();
    }
}

class Coffee_MilkDecorator extends BeverageDecorator {
    private cost: number = 20;
    private description: string = 'Coffee_MilkDecorator';

    getCost(): number {
        return super.getCost() + this.cost;
    }

    getDescription(): string {
        return super.getDescription() + ',' + this.description;
    }
}

class Coffee_SugarDecorator extends BeverageDecorator {
    private cost: number = 15;
    private description: string = 'Coffee_SugarDecorator';

    getCost(): number {
        return super.getCost() + this.cost;
    }

    getDescription(): string {
        return super.getDescription() + ',' + this.description;
    }
}

const coffee = new Beverage();

const milk = new Coffee_MilkDecorator(coffee);
const sugar = new Coffee_SugarDecorator(milk);

console.log(sugar.getCost());
console.log(sugar.getDescription());


