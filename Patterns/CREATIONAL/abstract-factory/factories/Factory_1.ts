import {IFactory} from "../IFactory";
import {IProductA} from "../IProductA";
import {Product_A1, Product_B1} from "../products";
import {IProductB} from "../IProductB";

export class Factory_1 implements IFactory {
    public createProduct_A(): IProductA {
        return new Product_A1();
    }

    public createProduct_B(): IProductB {
        return new Product_B1();
    }
}
