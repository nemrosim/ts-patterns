import { createArrayAndWriteToFile, readArrayFromFile } from "./createArray";

it('write', async () => {
    await createArrayAndWriteToFile('Collection/Sorting/exampleArray-notSorted.txt', 25_000);
    expect(true)
});


it('read', async () => {
    const array = await readArrayFromFile('Collection/Sorting/exampleArray-notSorted.txt');

    const a = JSON.parse(array);

    expect(a).toEqual([1, 2, 3])
})
