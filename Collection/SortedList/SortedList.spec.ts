import { SortedList } from "./SortedList";

describe('add function', () => {
    it('should add one value', () => {
        const list = new SortedList<number>();

        list.add(4);

        expect(list.getFirst().value).toEqual(4);
        expect(list.getFirst().next).toBeUndefined();

        expect(list.getLast()).toEqual(list.getFirst());
    });

    it('should add two values', () => {
        const list = new SortedList<number>();

        list.add(4);
        list.add(1);

        expect(list.getAsArray()).toEqual([1, 4]);

        expect(list.getFirst().value).toEqual(1);
        expect(list.getFirst().next.value).toEqual(4);

        expect(list.getLast().value).toEqual(4);
        expect(list.getLast().previous.value).toEqual(1);
    });

    it('should add three values', () => {
        const list = new SortedList<number>();

        list.add(4);
        list.add(1);
        list.add(-30);

        expect(list.getAsArray()).toEqual([-30, 1, 4]);

        expect(list.getFirst().value).toEqual(-30);
        expect(list.getFirst().next.value).toEqual(1);

        expect(list.getLast().value).toEqual(4);

        const middleItem = list.getLast().previous;

        expect(middleItem.value).toEqual(1);
        expect(middleItem.next.value).toEqual(4);
        expect(middleItem.previous.value).toEqual(-30);
    });

    it('should add multiple numbers', () => {
        const list = new SortedList<number>();

        list.add(4);
        list.add(1);
        list.add(-30);
        list.add(40);
        list.add(2);

        const result = list.getAsArray()

        expect(result).toEqual([-30, 1, 2, 4, 40])

    })

    it('should add multiple strings', () => {
        const list = new SortedList<string>();

        list.add('Some');
        list.add('Art');
        list.add('String');
        list.add("Go");
        list.add('Zoo');

        const result = list.getAsArray()

        expect(result).toEqual([
            "Art",
            "Go",
            "Some",
            "String",
            "Zoo"
        ])
    })
})
