interface AbstractSandwich{
    make(): string;
}

class SimpleSandwich implements AbstractSandwich {
    // @Override
    make(): string {
        return "Bread";
    }
}

class SandwichDecorator implements AbstractSandwich{
    customSandwich: AbstractSandwich;

    constructor(sandwich: AbstractSandwich) {
        this.customSandwich = sandwich;
    }

    make(): string {
        return this.customSandwich.make();
    }

}

class MeatDecorator extends SandwichDecorator {
    constructor(sandwich: AbstractSandwich) {
        super(sandwich);
    }

    make(): string {
        return super.make() + " + turkey";
    }
}

class DressingDecorator extends SandwichDecorator {
    constructor(sandwich: AbstractSandwich) {
        super(sandwich);
    }

    make(): string {
        return super.make() + " + mustard";
    }
}

const simpleS = new SimpleSandwich();
const meatS = new MeatDecorator(simpleS);
const fullSandwich = new DressingDecorator(meatS);
console.log(fullSandwich.make())



