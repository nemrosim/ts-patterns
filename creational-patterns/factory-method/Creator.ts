import {IProduct} from './IProduct'

export abstract class Creator {
    public abstract factoryMethod(): IProduct;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
