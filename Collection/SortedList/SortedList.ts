class SortedListNode<T> {
    private _value: T;
    private _previous?: SortedListNode<T>;
    private _next?: SortedListNode<T>;

    constructor({
                    value,
                    previous,
                    next,
                }: {
                    value: T;
                    previous?: SortedListNode<T>;
                    next?: SortedListNode<T>;
                }
    ) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }


    get value(): T {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }

    get next(): SortedListNode<T> {
        return this._next;
    }

    set next(value: SortedListNode<T>) {
        this._next = value;
    }

    get previous(): SortedListNode<T> {
        return this._previous;
    }

    set previous(value: SortedListNode<T>) {
        this._previous = value;
    }
}


/**
 * A doubly linked list where the values
 * are inserted and stored in sort-order
 */
export class SortedList<T> {

    private count: number = 0;
    /**
     * Index "zero"
     */
    private first?: SortedListNode<T>;
    private last?: SortedListNode<T>;

    getFirst() {
        return this.first;
    }

    getLast() {
        return this.last;
    }

    /**
     * Adds the specified item to the linked list
     * in the sort order of the item type.
     * Complexity: O(n)
     */
    add(value: T): void {
        // empty list
        if (!this.first) {

            this.first = new SortedListNode<T>({value});
            this.last = this.first;

        } else if (this.first?.value >= value) {

            // adding at the beginning
            const newFirst = new SortedListNode<T>({
                value,
                next: this.first,
            });

            this.first.previous = newFirst;
            this.first = newFirst;

        } else if (this.last?.value < value) {

            // adding at the end
            const newLast = new SortedListNode<T>({
                value,
                previous: this.last
            });

            this.last.next = newLast;
            this.last = newLast;
        } else {

            // adding at the middle
            let nextNodeBeforeInsert = this.first;

            while (nextNodeBeforeInsert.value < value) {
                nextNodeBeforeInsert = nextNodeBeforeInsert.next;
            }

            // insert
            let newNode = new SortedListNode<T>({
                value,
                next: nextNodeBeforeInsert,
                previous: nextNodeBeforeInsert.previous
            });


            nextNodeBeforeInsert.previous.next = newNode;
            nextNodeBeforeInsert.previous = newNode;

        }

        this.count++;

    }

    getAsArray() {
        let current = this.first;

        const result = [];

        while (current) {
            result.push(current.value);

            current = current.next;
        }

        return result;
    }

}
