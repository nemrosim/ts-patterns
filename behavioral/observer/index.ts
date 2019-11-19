import {Observable} from './Observable'
import {IObserver} from "./IObserver";

export class Observer_A implements IObserver {
    public update(subject: Observable): void {
        if (subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

export class Observer_B implements IObserver {
    public update(subject: Observable): void {
        if (subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}


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



