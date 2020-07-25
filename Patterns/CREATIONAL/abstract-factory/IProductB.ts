import {IProductA} from './IProductA'

export interface IProductB {
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: IProductA): string;
}
