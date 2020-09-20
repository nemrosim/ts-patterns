import { IBuilder } from './IBuilder'
import { Car } from './Car'

export class CarBuilder implements IBuilder {
    private product: Car;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Car();
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

    public getProduct(): Car {
        const result = this.product;
        this.reset();
        return result;
    }
}
