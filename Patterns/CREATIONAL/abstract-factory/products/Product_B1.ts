import { IProductB } from "../IProductB";
import { IProductA } from "../IProductA";

export class Product_B1 implements IProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }

    public anotherUsefulFunctionB(collaborator: IProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}
