import { IObservable } from './IObservable'
import { IObserver } from './IObserver'

export class Observable implements IObservable {

    public state: number;
    private observers: IObserver[] = [];

    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        this.state = Math.floor(Math.random() * (10 + 1));
        this.notifyObservers();
    }
}
