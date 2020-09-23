/**
 * Doubly Ended Queue (deque)
 *
 * A queue-like container which is both
 * First-in, First-out
 * and
 * Last-in, Last-out
 *
 * Hybrid between Stack and Queue
 */
import { DoublyLinkedList } from "../../Lists/LinkedList/DoublyLinkedListNode";

/**
 * We can name it "Deque"
 */
export class DoublyEndedQueue<T> {
    private dll = new DoublyLinkedList<T>();


    enqueueHead(value: T) {
        this.dll.addFirst(value);
    }

    enqueueTail(value: T) {
        this.dll.addLast(value);
    }

    dequeueHead(): T {
        let value: T;

        value = this.dll.getFirst().value;
        if (value) {
            this.dll.remove(value);
            return value;
        }

        throw new Error('Something is wrong');
    }

    dequeueTail(): T {
        let value: T;

        value = this.dll.getLast().value;
        if (value) {
            this.dll.remove(value);
            return value;
        }

        throw new Error('Something is wrong');
    }

    peekFirst(): T {
        return this.dll.getFirst().value;
    }

    peekTail(): T {
        return this.dll.getLast().value;
    }

    getAmountOfItems(): number {
        return this.dll.getAmountOfItems();
    }
}
