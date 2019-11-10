import {Builder} from './Builder'

export class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePart_A();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePart_A();
        this.builder.producePart_B();
        this.builder.producePart_C();
    }
}
