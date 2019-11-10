import {IObserver} from "../IObserver";
import {Observable} from "../Observable";

export class Observer_B implements IObserver {
    public update(subject: Observable): void {
        if (subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}
