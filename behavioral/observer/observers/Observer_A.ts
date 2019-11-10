import {IObserver} from "../IObserver";
import {Observable} from "../Observable";

export class Observer_A implements IObserver {
    public update(subject: Observable): void {
        if (subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}
