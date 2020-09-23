/*
  Singly Linked List:
  A linked list that provides forward iteration
  from the start to the end of the list
 */
class ListNode<T> {
    private _value: T;
    private _next: ListNode<T>;


    constructor(value) {
        this._value = value;
        this._next = null;
    }


    set value(value: T) {
        this._value = value;
    }

    set next(value: ListNode<T>) {
        this._next = value;
    }
}

const head = new ListNode<number>(1);
head.next = new ListNode<number>(2);
head.next.next = new ListNode<number>(3);
