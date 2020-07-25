class Product {
    private id: string;
    private name: string;


    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

/**
 * Abstraction
 */
interface ProductRepo {
    getById(productId: string): Product;
}

class MysqlProductRepo implements ProductRepo {
    // @Override
    public getById(productId: string): Product {
        // Fetch product from db
        return new Product(productId, 'Some name');
    }
}

class MongoDbProductRepo implements ProductRepo {
    // @Override
    public getById(productId: string): Product {
        // Fetch product from db
        return new Product(productId, 'Some name');
    }
}

class PostgesqlProductRepo implements ProductRepo {
    // @Override
    public getById(productId: string): Product {
        // Fetch product from db
        return new Product(productId, 'Some name');
    }
}

enum DatabaseTypes {
    MYSQL,
    MONGO_BD,
    POSTGRE_SQL
}

class ProductRepoFactory {
    public static create(type: DatabaseTypes): ProductRepo {
        if (type === DatabaseTypes.MYSQL) {
            return new MysqlProductRepo();
        }

        if (type === DatabaseTypes.MONGO_BD) {
            return new MongoDbProductRepo();
        }

        if (type === DatabaseTypes.POSTGRE_SQL) {
            return new PostgesqlProductRepo();
        }
    }
}

class PaymentProcessor {

    public processPayment(product: Product): void {
        // do something;
    }

    public pay(productId: string): void {

        // Strategy, Factory can be used instead of "new SqlProductRepo();"
        const repo: ProductRepo = ProductRepoFactory.create(DatabaseTypes.MYSQL);
        const product = repo.getById('1');
        this.processPayment(product);
    }
}


