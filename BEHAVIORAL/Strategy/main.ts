import {Context,Strategy_Array_Sort,Strategy_Array_Reverse} from './Strategy';


//



const context = new Context(new Strategy_Array_Sort());

const data = ['a', 'b', 'c', 'd', 'e'];

/**
 * This will sort the data
 */
context.realMethod(data);

context.setStrategy(new Strategy_Array_Reverse());

/**
 * This will reverse the data
 */
context.realMethod(data);
