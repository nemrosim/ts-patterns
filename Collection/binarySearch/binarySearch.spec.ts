import { readAndParseArray } from "../Sorting/createArray";
import { binarySearch } from "./binarySearch";

it('should find in sorted small array', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const time = process.hrtime()
    const result = binarySearch(array, 3);
    const t1 = process.hrtime(time);
    console.log("%d seconds and %d nanoseconds", t1[0], t1[1]);

    const time2 = process.hrtime()
    const nativeResult = array.find(e => e === 3);
    const t2 = process.hrtime(time2);
    console.log("%d seconds and %d nanoseconds", t2[0], t2[1]);

    expect(result).toEqual(3);
    expect(nativeResult).toEqual(3);
})

it('should find in sorted 10_000_000 array', async () => {
    const array = await readAndParseArray('Collection/binarySearch/10_000_000-array-sorted.txt');

    const expectedResult = 9851372;
    const time = process.hrtime()
    const result = binarySearch(array, expectedResult);
    const t1 = process.hrtime(time);
    console.log("%d seconds and %d nanoseconds", t1[0], t1[1]);

    const time2 = process.hrtime()
    const nativeResult = array.find(e => e === expectedResult);
    const t2 = process.hrtime(time2);
    console.log("%d seconds and %d nanoseconds", t2[0], t2[1]);

    expect(result).toEqual(expectedResult);
    expect(nativeResult).toEqual(expectedResult);
});
