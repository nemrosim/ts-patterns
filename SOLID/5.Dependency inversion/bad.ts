class Product {
    private id: string;
    private name: string;


    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

/**
 * Low level
 */
class SqlProductRepo {
    public getById(productId: string): Product {
        // Fetch product from db
        return new Product(productId, 'Some name');
    }
}

/**
 * High-level module
 */
class PaymentProcessor {

    public processPayment(product: Product): void {
        // do something;
    }

    public pay(productId: string): void {
        const repo = new SqlProductRepo();
        const product = repo.getById('1');
        this.processPayment(product);
    }
}


