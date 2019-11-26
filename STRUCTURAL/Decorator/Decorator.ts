interface IComponent {
    operation(): string;
}

class Decorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
        // asdasdasd
    }

    public operation(): string {
        return this.component.operation();
    }
}

class Component_1 implements IComponent {
    public operation(): string {
        return 'ConcreteComponent';
    }
}


class Decorator_1 extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class Decorator_2 extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

const component_1: IComponent = new Component_1();
const decorator_1: Decorator = new Decorator_1(component_1);
const decorator_2: Decorator = new Decorator_2(decorator_1);
console.log('Client: Now I\'ve got a decorated component:');
