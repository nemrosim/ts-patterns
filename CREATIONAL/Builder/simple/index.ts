class Burger {
    private size: number = 0;
    private cheese: boolean = false;
    private pepperoni: boolean = false;
    private lettuce: boolean = false;
    private tomato: boolean = false;

    constructor(builder: BurgerBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.lettuce = builder.lettuce;
        this.tomato = builder.tomato;
    }
}


class BurgerBuilder {
    public size;
    public cheese = false;
    public pepperoni = false;
    public lettuce = false;
    public tomato = false;

    constructor(size) {
        this.size = size;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addLettuce() {
        this.lettuce = true;
        return this;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addTomato() {
        this.tomato = true;
        return this;
    }

    build(): Burger {
        return new Burger(this);
    }
}

const burger = new BurgerBuilder(0)
    .addCheese()
    .addLettuce()
    .addPepperoni()
    .addTomato()
    .build();

console.log('Burger', burger);
