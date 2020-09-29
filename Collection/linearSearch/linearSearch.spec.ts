import { readAndParseArray } from "../Sorting/createArray";
import { linearSearch } from "./linearSearch";

it('should find in sorted small array', async () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const expectedResult = 3;
    const time = process.hrtime()
    const result = linearSearch(array, expectedResult);
    const t1 = process.hrtime(time);
    console.log("%d seconds and %d nanoseconds", t1[0], t1[1]);

    const time2 = process.hrtime()
    const nativeResult = array.find(e => e === expectedResult);
    const t2 = process.hrtime(time2);
    console.log("%d seconds and %d nanoseconds", t2[0], t2[1]);

    expect(result).toEqual(expectedResult);
    expect(nativeResult).toEqual(expectedResult);
})

it('should find in sorted 10_000_000 array', async () => {
    const array = await readAndParseArray('Collection/binarySearch/10_000_000-array-sorted.txt');

    const expectedResult = 9851372;
    const time = process.hrtime()
    console.time('C')

    const result = linearSearch(array, expectedResult);

    console.timeEnd('C')
    const t1 = process.hrtime(time);
    console.log("%d seconds and %d nanoseconds", t1[0], t1[1]);

    const time2 = process.hrtime()
    console.time('N')

    const nativeResult = array.find(e => e === expectedResult);

    console.timeEnd('N')
    const t2 = process.hrtime(time2);
    console.log("%d seconds and %d nanoseconds", t2[0], t2[1]);

    expect(result).toEqual(expectedResult);
    expect(nativeResult).toEqual(expectedResult);
})
