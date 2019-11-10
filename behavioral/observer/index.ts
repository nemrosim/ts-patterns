import {Observable} from './Observable'
import {Observer_A,Observer_B} from './observers'

function main() {
    const observable = new Observable();

    const observer1 = new Observer_A();
    observable.addObserver(observer1);

    const observer2 = new Observer_B();
    observable.addObserver(observer2);


    observable.someBusinessLogic();
    observable.someBusinessLogic();

    observable.removeObserver(observer2);

    observable.someBusinessLogic();
}



