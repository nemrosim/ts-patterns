/**
 * A collection of key/value pairs
 * where the key can only exist once in the collection
 */
class AssociativeArray {

}

/**
 * An associative array container that provides O(1) insert,
 * delete and search operations
 */
class HashTable {

}

/**
 * A function that maps data of arbitrary size to data of a fixed size
 * 1. Stability:
 *      A hash function always generates the same output given the same input;
 *
 * 2. Uniformity (единообразие):
 *      A hash algorithm should distribute its resulting hash value
 *      uniformly throughout the output space;
 *
 * 3. Security
 *      A secure hashing algorithm cannot be inverted
 *      (the input derived from the output hash);
 *
 */
class HashFunction {

}

export const stableHashFunction = (input: string) => {
    let hash = 0;

    if (input.length == 0) return hash;

    for (let i = 0; i < input.length; i++) {
        const char = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    return hash;
}

/**
 * Additive hash
 * STABLE. NOT UNIFORM, NOT SECURE.
 * @param input
 */
export const simpleHash = (input: string) => {

    let hash = 0;

    if (input.length == 0) return hash;

    for (let i = 0; i < input.length; i++) {
        // Returns the Unicode value of the character
        hash += input.charCodeAt(i);
    }

    return hash;
};

/**
 * Folding hash. Dbj2 Hash
 * STABLE. NOT UNIFORM, NOT SECURE.
 * @param input
 */
export const foldingHash = (input: string) => {

    let hash = 5381;

    if (input.length == 0) return hash;

    for (let i = 0; i < input.length; i++) {
        // Returns the Unicode value of the character
        hash += hash * 33 + input.charCodeAt(i);
    }

    return hash;
}



export const splitArrayToChunksByTwo = (array: Array<any>) => {

    const result = [];
    // split array to chunks by 2
    let i, j, tempArray, chunk = 2;
    for (i = 0, j = array.length; i < j; i += chunk) {
        tempArray = array.slice(i, i + chunk);

        result.push(tempArray);
    }

    return result;
}
