import { IFactory } from "../IFactory";
import { IProductA } from "../IProductA";
import { Product_A2, Product_B2 } from "../products";
import { IProductB } from "../IProductB";

export class Factory_2 implements IFactory {
    public createProduct_A(): IProductA {
        return new Product_A2();
    }

    public createProduct_B(): IProductB {
        return new Product_B2();
    }
}
