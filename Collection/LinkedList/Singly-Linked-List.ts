/**
 * A linked list that provides forward iteration
 * from the start to the end of the list;
 */
class SinglyLinkedList<T> {
    private _value: T;
    private _next: SinglyLinkedList<T>;


    constructor(value: T, next: SinglyLinkedList<T> = null) {
        this._value = value;
        this._next = next;
    }


    get value(): T {
        return this._value;
    }

    get next(): SinglyLinkedList<T> {
        return this._next;
    }


    set value(value: T) {
        this._value = value;
    }

    set next(value: SinglyLinkedList<T>) {
        this._next = value;
    }
}
