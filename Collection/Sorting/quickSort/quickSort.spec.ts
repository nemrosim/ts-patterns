import { createArrayAndWriteToFile, readArrayFromFile } from "../createArray";
import { quickSort } from "./quickSort";
import * as fs from "fs/promises";


it('should sort sorted array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    quickSort(array, 0, array.length - 1);

    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})


it('should sort simple array', () => {
    const array = [-333, 10, 8, 3, 5, 4, 7, 6, 9, 10, 1, 2, 3, -333];

    quickSort(array, 0, array.length - 1);

    expect(array).toEqual([-333, -333, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10]);
});

it('should sort array for 100 items', async () => {

    const array = await readArrayFromFile('Collection/Sorting/quickSort/100-array-notSorted.txt');
    const expectedResult = await readArrayFromFile('Collection/Sorting/quickSort/100-array-sorted.txt');

    const parsedArray: Array<number> = JSON.parse(array);
    const parsedExpectedArray: Array<number> = JSON.parse(expectedResult);

    console.time('Time')

    quickSort(parsedArray, 0, parsedArray.length - 1);

    // ~ 978 ms
    console.timeEnd('Time')

    console.time('Time')

    // ~ 978 ms
    console.timeEnd('Time')

    expect(parsedArray).toEqual(parsedExpectedArray);
});


it('should sort array for 1000 items', async () => {
    const array = await readArrayFromFile('Collection/Sorting/quickSort/1000-array-notSorted.txt');

    const parsedArray = JSON.parse(array);
    const nativeSortArray = [...parsedArray];

    console.time('Time')

    quickSort(parsedArray, 0, parsedArray.length - 1);

    // ~ 1 ms
    console.timeEnd('Time')

    console.time('Native sort')

    nativeSortArray.sort((a, b) => a - b)

    // ~ 1 ms
    console.timeEnd('Native sort');

    const expected = await readArrayFromFile('Collection/Sorting/quickSort/1000-array-sorted.txt');
    const parsedExpectedArray = JSON.parse(expected);

    expect(parsedArray).toEqual(parsedExpectedArray);
    expect(parsedArray).toEqual(nativeSortArray);
});

it('should sort array for 1_000_000 items', async () => {
    const array = await readArrayFromFile('Collection/Sorting/quickSort/1_000_000-array-notSorted.txt');

    const parsedArray = JSON.parse(array);
    const nativeSortArray = [...parsedArray];

    console.time('Time')

    quickSort(parsedArray, 0, parsedArray.length - 1);

    // ~ 114 ms
    // ~ 136 ms
    // ~ 126 ms
    // ~ 124 ms
    // ~ 110 ms
    // ~ 162 ms
    // ~ 116 ms
    console.timeEnd('Time')


    console.time('Native sort')

    nativeSortArray.sort((a, b) => a - b)

    // ~ 304 ms
    // ~ 422 ms
    // ~ 304 ms
    // ~ 313 ms
    // ~ 316 ms
    // ~ 450 ms
    // ~ 320 ms
    console.timeEnd('Native sort');

    const expectedStringData = await readArrayFromFile('Collection/Sorting/quickSort/1_000_000-array-sorted.txt');
    const expectedArray = JSON.parse(expectedStringData);

    expect(parsedArray).toEqual(nativeSortArray);
    expect(parsedArray).toEqual(expectedArray);
});

it('should sort array for 2_000_000 items', async () => {
    const array = await readArrayFromFile('Collection/Sorting/quickSort/2_000_000-array-notSorted.txt');

    const parsedArray = JSON.parse(array);
    const nativeSortArray = [...parsedArray];

    console.time('Time')

    quickSort(parsedArray, 0, parsedArray.length - 1);

    // ~ 220 ms
    // ~ 225 ms
    // ~ 220 ms
    // ~ 235 ms
    // ~ 219 ms
    console.timeEnd('Time')


    console.time('Native sort')

    nativeSortArray.sort((a, b) => a - b)

    // ~ 638 ms
    // ~ 631 ms
    // ~ 633 ms
    // ~ 649 ms
    // ~ 643 ms
    console.timeEnd('Native sort');

    const expectedStringData = await readArrayFromFile('Collection/Sorting/quickSort/2_000_000-array-sorted.txt');
    const expectedArray = JSON.parse(expectedStringData);


    expect(parsedArray).toEqual(nativeSortArray);
    expect(parsedArray).toEqual(expectedArray);
});

it('should sort array for 10_000_000 items', async () => {
    jest.setTimeout(30000);

    const array = await readArrayFromFile('Collection/Sorting/quickSort/10_000_000-array-notSorted.txt');

    const parsedArray = JSON.parse(array);
    const nativeSortArray = [...parsedArray];

    console.time('Time')

    quickSort(parsedArray, 0, parsedArray.length - 1);

    // ~ 1489 ms
    console.timeEnd('Time')


    console.time('Native sort')

    nativeSortArray.sort((a, b) => a - b)

    // ~ 3647 ms
    console.timeEnd('Native sort');

    const expectedStringData = await readArrayFromFile('Collection/Sorting/quickSort/10_000_000-array-sorted.txt');
    const expectedArray = JSON.parse(expectedStringData);

    expect(parsedArray).toEqual(nativeSortArray);
    expect(parsedArray).toEqual(expectedArray);
});


it('', async () => {
    const fileName = '10_000_000'
    jest.setTimeout(30000);
    await createArrayAndWriteToFile(`Collection/Sorting/quickSort/${fileName}-array-notSorted.txt`, 10_000_000);
    const array = await readArrayFromFile(`Collection/Sorting/quickSort/${fileName}-array-notSorted.txt`);
    const parsedArray: Array<number> = JSON.parse(array);


    parsedArray.sort((a, b) => a - b);

    const result = JSON.stringify(parsedArray);
    await fs.writeFile(`Collection/Sorting/quickSort/${fileName}-array-sorted.txt`, result);

    expect(true);
})
