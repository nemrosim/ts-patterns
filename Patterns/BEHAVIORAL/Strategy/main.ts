import { Context, Strategy_Array_Reverse, Strategy_Array_Sort } from './Strategy';


//


const context = new Context(new Strategy_Array_Sort());

const data = ['a', 'b', 'c', 'd', 'e'];

/**
 * This will sort the data
 */
context.doSomething(data);

context.setStrategy(new Strategy_Array_Reverse());

/**
 * This will reverse the data
 */
context.doSomething(data);
