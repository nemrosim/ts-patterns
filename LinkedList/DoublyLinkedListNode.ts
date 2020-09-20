import { isEqual } from 'lodash'

/**
 * A linked list that provides forward iteration
 * from the start to the end of the list,
 * and reverse iteration, from end to start
 *
 *
 * Adding items
 * "addHead": Adds a value to the beginning of the list. O(1) complexity
 * "addTail": Adds a value at the end of the list. O(1) complexity
 *
 *
 */
class DoublyLinkedListNode<T> {
    private _value: T;
    private _previous?: DoublyLinkedListNode<T>;
    private _next?: DoublyLinkedListNode<T>;

    constructor({
                    value,
                    previous,
                    next,
                }: {
                    value: T;
                    previous?: DoublyLinkedListNode<T>;
                    next?: DoublyLinkedListNode<T>;
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

    get next(): DoublyLinkedListNode<T> {
        return this._next;
    }

    set next(value: DoublyLinkedListNode<T>) {
        this._next = value;
    }

    get previous(): DoublyLinkedListNode<T> {
        return this._previous;
    }

    set previous(value: DoublyLinkedListNode<T>) {
        this._previous = value;
    }
}

export class DoublyLinkedList<T> {
    private count: number = 0;
    /**
     * Index "zero"
     */
    private first?: DoublyLinkedListNode<T>;
    private last?: DoublyLinkedListNode<T>;

    constructor(first: DoublyLinkedListNode<T> = undefined, last: DoublyLinkedListNode<T> = undefined) {
        this.first = first;
        this.last = last;
    }

    addFirst(value: T): void {
        const adding = new DoublyLinkedListNode<T>({
            value,
            next: this.first,
            previous: undefined,
        })

        /**
         * If list has "Heading" node, (like index "zero"),
         * then update it's "previous" pointer to a new one
         */
        if (this.first) {
            this.first.previous = adding;
        }

        /**
         * Set new "first" pointer to the added Node
         */
        this.first = adding;

        /**
         * If this list was empty - "last is null"
         * Then the "first" and "last" are the same
         */
        if (!this.last) {
            this.last = this.first;
        }

        this.count++;
    }

    addLast(value: T): void {
        if (!this.last) {
            this.addFirst(value);
        } else {

            const adding = new DoublyLinkedListNode<T>({
                value,
                next: undefined,
                previous: this.last,
            })

            this.last.next = adding;

            this.last = adding;

            this.count++;
        }
    }

    /**
     * Appends the specified element to the end of this list.
     * @param value
     */
    add(value: T) {
        this.addLast(value);
    }

    /**
     * Inserts the specified element at the specified position in this list.
     * @param index
     * @param value
     */
    addByIndex(index: number, value: T): void {
        if (index < 0) {
            throw new Error('index cannot be less than "zero')
        }

        if (index > this.count) {
            throw new Error('index cannot be more than items in the list');
        }

        if (index === 0) {
            this.addFirst(value);
        } else if (index === (this.count)) {
            this.addLast(value);
        } else {
            throw new Error('not implemented yet');

        }
    }

    /**
     * Find the first "node" whose value equals
     * the provided argument. Complexity: O(n)
     * @param value
     */
    find(value: T): DoublyLinkedListNode<T> {

        let current = this.first;

        while (current) {
            if (isEqual(current.value, value)) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    /**
     * Return "true" if the specified value
     * exists in the list, false otherwise
     * @param value
     */
    contains(value: T): boolean {
        return Boolean(this.find(value));

    }

    /**
     * Removes the first node
     * whose value is equal to the argument.
     * Complexity: O(n)
     */
    remove(value: T): boolean {
        const foundedNode = this.find(value);

        if (!foundedNode) {
            return false;
        }

        const prev = foundedNode.previous;
        const next = foundedNode.next;

        if (!prev) {
            this.first = next;
            if (this.first) {
                this.first.previous = undefined;
            }
        } else {
            prev.next = next;
        }

        if (!next) {
            this.last = prev;
            if (this.last) {
                this.last.next = undefined;
            }
        } else {
            next.previous = prev;
        }

        this.count--;

        return true;
    }


    getAmountOfItems(): number {
        return this.count;
    }

    getFirst(): DoublyLinkedListNode<T> {
        return this.first;
    }

    getLast(): DoublyLinkedListNode<T> {
        return this.last;
    }
}
