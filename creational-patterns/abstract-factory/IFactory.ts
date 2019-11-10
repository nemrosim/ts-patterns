import {IProductA} from './IProductA'
import {IProductB} from './IProductB'

export interface IFactory {
    createProduct_A(): IProductA;

    createProduct_B(): IProductB;
}
