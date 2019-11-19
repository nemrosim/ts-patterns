import {IObservable} from './IObservable'

export interface IObserver {
    update(subject: IObservable): void;
}
