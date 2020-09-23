import { DoublyEndedQueue } from "../DoublyEndedQueue/DoublyEndedQueue";

/**
 * A first-in, First-out (FIFO) container.
 *
 * "Queuing" in a line
 * Enqueue at the end of line
 *
 * First is "head"
 * Last is "tail"
 *
 * The head of the line in "dequeued"
 */
class Queue<T> {
    private doublyEndedQueue = new DoublyEndedQueue<T>();

    enqueue(value: T) {
        this.doublyEndedQueue.enqueueTail(value);
    }

    dequeue(): T {
        return this.doublyEndedQueue.dequeueHead();
    }

    peek(): T {
        let value: T;

        value = this.doublyEndedQueue.peekFirst();
        if (value) {
            return value;
        }

        throw new Error('Something is wrong');
    }

    getAmountOfItems(): number {
        return this.doublyEndedQueue.getAmountOfItems();
    }
}
