/**
 * Split by two.
 * 1 + lgN in a sorted array of size N
 * @param array
 * @param value
 */
export const binarySearch = (array: Array<number>, value: number): number => {

    let low = 0, high = array.length - 1;

    let middleArrayIndex;
    let middleValue;

    while (low <= high) {
        middleArrayIndex = Math.floor(low + (high - low) / 2)
        // one "3-way compare"
        middleValue = array[middleArrayIndex];
        if (value < middleValue) {
            high = middleArrayIndex - 1;
        } else if (value > middleValue) {
            low = middleArrayIndex + 1;
        } else {
            return middleValue;
        }
    }

    return -1;
}

