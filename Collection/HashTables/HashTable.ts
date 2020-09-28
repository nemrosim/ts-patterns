
interface HashTableProps<T> {
    [key: string]: T;
}

/**
 * Hash Collision
 * When multiple distinct keys would be interested
 * at the same hash table index.
 *
 * Solution:
 * Separate Chaining
 * The hash table handles collisions by linking
 * all the values with the same table index into a linked list of entries.
 *  ...
 *
 *
 *  Fill Factor
 *  The percentage of capacity representing
 *  the maximum number of entries
 *  before the table will grow. E.g. 0.80
 *
 *  Growth Factor
 *  The multiple to increase the capacity
 *  of the hash table when the fill factor has been
 *  exceeded. E.g., 1.50
 *
 *
 */
export class HashTable<Key extends string, Value> {

    table: HashTableProps<Value>;


    constructor(table: HashTableProps<Value>) {
        this.table = {};
    }

    private hash = (key: Key):number => {
        let hash = 0;

        if (key.length == 0) return hash;

        for (let i = 0; i < key.length; i++) {
            // Returns the Unicode value of the character
            hash += key.charCodeAt(i);
        }

        return hash;
    }

    get = (key) => {
        // @ts-ignore
        return this.table[key];
    }

    add = (value: Value) => {
        // @ts-ignore
        this.table[this.hash(value)] = value;
    }
}
