import {IBuilder} from './IBuilder'
import {Product_A} from './Product_A'

export class Builder implements IBuilder {
    private product: Product_A;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product_A();
    }

    public producePart_A(): void {
        this.product.parts.push('PartA1');
    }

    public producePart_B(): void {
        this.product.parts.push('PartB1');
    }

    public producePart_C(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product_A {
        const result = this.product;
        this.reset();
        return result;
    }
}
