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
interface IProductRepo {
    getById(productId: string): Product;
}

class MysqlProductRepo implements IProductRepo {
    // @Override
    public getById(productId: string): Product {
        // Fetch product from db
        return new Product(productId, 'Some name');
    }
}

class MongoDbProductRepo implements IProductRepo {
    // @Override
    public getById(productId: string): Product {
        // Fetch product from db
        return new Product(productId, 'Some name');
    }
}

class PostgesqlProductRepo implements IProductRepo {
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
    public static create(type: DatabaseTypes): IProductRepo {
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
    private repo: IProductRepo;

    constructor(repo: IProductRepo) {
        this.repo = repo;
    }

    public pay(productId: string): void {
        const product = this.repo.getById(productId);
        this.processPayment(product);
    }

    public processPayment(product: Product): void {
        // do something;
    }
}

const repo = ProductRepoFactory.create(DatabaseTypes.MYSQL);
const paymentProcessor = new PaymentProcessor(repo);
paymentProcessor.pay('some-product-id');


