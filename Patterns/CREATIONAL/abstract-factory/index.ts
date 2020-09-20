import { IFactory } from './IFactory'
import { Factory_1, Factory_2 } from './factories'

function main(factory: IFactory) {
    const productA = factory.createProduct_A();
    const productB = factory.createProduct_B();

    console.log("PRODUCT A: ->", productA.usefulFunctionA());
    console.log("--------------------------------------");

    console.log("PRODUCT B: ->", productB.usefulFunctionB());
    console.log("PRODUCT B: ->", productB.anotherUsefulFunctionB(productA));
    console.log("-------------- THE END ----------------- \n")
}


main(new Factory_1());
main(new Factory_2());
