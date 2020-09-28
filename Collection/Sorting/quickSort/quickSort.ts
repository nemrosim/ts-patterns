function swap(array, num1: number, num2: number) {
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
}

function partition  (array: Array<number>, left: number, right: number, pivot: number) {
    let leftPointer = left - 1;
    let rightPointer = right;

    while (true) {
        while (array[++leftPointer] < pivot) {
            //do nothing
        }

        while (rightPointer > 0 && array[--rightPointer] > pivot) {
            //do nothing
        }

        if (leftPointer >= rightPointer) {
            break;
        } else {
            swap(array, leftPointer, rightPointer);
        }
    }

    swap(array, leftPointer, right);
    return leftPointer;
}

/**
 * QUICK SORT FROM https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_program_in_c.htm
 * @param array
 * @param left
 * @param right
 */
export const quickSort= (array: Array<number>, left: number, right: number)=> {
    if (right - left <= 0) {
        return;
    } else {
        const pivot = array[right];
        const partitionPoint = partition(array, left, right, pivot);
        quickSort(array, left, partitionPoint - 1);
        quickSort(array, partitionPoint + 1, right);
    }
}
