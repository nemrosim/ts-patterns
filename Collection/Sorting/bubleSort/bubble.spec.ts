import { bubbleSort } from "./bubble";
import { readArrayFromFile } from "../createArray";


it('should sort array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    bubbleSort(array);

    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})


it('should sort array v2', () => {
    const array = [-333, 2, 1, 3, 5, 4, 7, 6, 9, 10, 8, 10];

    bubbleSort(array);

    expect(array).toEqual([-333, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]);
});

it('should sort array v3', async () => {
    const array = await readArrayFromFile('Collection/Sorting/bubleSort/exampleArray-notSorted.txt');

    const parsedArray = JSON.parse(array);

    const copiedArray = [...parsedArray];

    console.time('Native sort');

    const nativeSortResult = copiedArray.sort((a, b) => a - b);

    // ~ 7 ms
    console.timeEnd('Native sort')


    console.time('Time')

    bubbleSort(parsedArray);

    // ~ 978 ms
    console.timeEnd('Time');


    expect(parsedArray).toEqual(nativeSortResult);
});
