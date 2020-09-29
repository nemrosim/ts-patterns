export const linearSearch = (array: Array<number>, value: number): number => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return value;
        }
    }

    return -1;
}
