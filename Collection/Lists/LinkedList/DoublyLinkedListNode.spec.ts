import { DoublyLinkedList } from './DoublyLinkedListNode';

describe('addFirst function', () => {
    it('should add head (one node)', () => {
        const list = new DoublyLinkedList<number>();
        list.addFirst(1);

        expect(list.getFirst().value).toEqual(1);
        expect(list.getLast().value).toEqual(1);

        expect(list.getFirst().next).toBeUndefined();
        expect(list.getFirst().previous).toBeUndefined();

    });

    it('should add heads (two nodes)', () => {
        const list = new DoublyLinkedList<number>();

        list.addFirst(1);
        list.addFirst(2);

        const head = list.getFirst();

        expect(head.value).toEqual(2);
        expect(head.next.value).toEqual(1);
        expect(head.previous).toBeUndefined();

        const tail = list.getLast();

        expect(tail.value).toEqual(1);
        expect(tail.next).toBeUndefined();
        expect(tail.previous.value).toEqual(2);
    })

    it('should add heads (3 nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.addFirst('index 2');
        list.addFirst('index 1');
        list.addFirst('index 0');

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.next.value).toEqual(last.previous.value);

        const middleNode = first.next;

        expect(middleNode.previous.value).toEqual(first.value)
        expect(middleNode.next.value).toEqual(last.value)
    })
})

describe('addLast function', () => {
    it('should add last (one node)', () => {
        const list = new DoublyLinkedList<number>();
        list.addLast(1);

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.value).toEqual(1);
        expect(last.value).toEqual(1);

        expect(first.next).toBeUndefined();
        expect(first.previous).toBeUndefined();

    });

    it('should add last (two nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.addLast('index 0');
        list.addLast('index 1');

        const first = list.getFirst();

        expect(first.value).toEqual('index 0');
        expect(first.next.value).toEqual('index 1');
        expect(first.previous).toBeUndefined();

        const tail = list.getLast();

        expect(tail.value).toEqual('index 1');
        expect(tail.next).toBeUndefined();
        expect(tail.previous.value).toEqual('index 0');
    })

    it('should add last (3 nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.addLast('index 2');
        list.addLast('index 1');
        list.addLast('index 0');

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.next.value).toEqual(last.previous.value);

        const middleNode = first.next;

        expect(middleNode.previous.value).toEqual(first.value)
        expect(middleNode.next.value).toEqual(last.value)
    })
})

describe('add function', () => {
    it('should add last (one node)', () => {
        const list = new DoublyLinkedList<number>();
        list.add(1);

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.value).toEqual(1);
        expect(last.value).toEqual(1);

        expect(first.next).toBeUndefined();
        expect(first.previous).toBeUndefined();

    });

    it('should add last (two nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.add('index 0');
        list.add('index 1');

        const first = list.getFirst();

        expect(first.value).toEqual('index 0');
        expect(first.next.value).toEqual('index 1');
        expect(first.previous).toBeUndefined();

        const tail = list.getLast();

        expect(tail.value).toEqual('index 1');
        expect(tail.next).toBeUndefined();
        expect(tail.previous.value).toEqual('index 0');
    })

    it('should add last (3 nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.add('index 2');
        list.add('index 1');
        list.add('index 0');

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.next.value).toEqual(last.previous.value);

        const middleNode = first.next;

        expect(middleNode.previous.value).toEqual(first.value)
        expect(middleNode.next.value).toEqual(last.value)
    })
});

describe('add by index function', () => {
    it('should add first', () => {
        const list = new DoublyLinkedList<number>();
        list.addByIndex(0, 1);

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.value).toEqual(1);
        expect(last.value).toEqual(1);

        expect(first.next).toBeUndefined();
        expect(first.previous).toBeUndefined();

    });

    it('should throw an error', () => {
        expect(() => {
            const list = new DoublyLinkedList<string>();

            list.addByIndex(2, 'index 2');

        }).toThrowError('index cannot be more than items in the list')
    });

    it('should add last (two nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.add('index 0');
        list.add('index 1');

        const first = list.getFirst();

        expect(first.value).toEqual('index 0');
        expect(first.next.value).toEqual('index 1');
        expect(first.previous).toBeUndefined();

        const tail = list.getLast();

        expect(tail.value).toEqual('index 1');
        expect(tail.next).toBeUndefined();
        expect(tail.previous.value).toEqual('index 0');
    })

    it('should add last (3 nodes)', () => {
        const list = new DoublyLinkedList<string>();

        list.add('index 2');
        list.add('index 1');
        list.add('index 0');

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.next.value).toEqual(last.previous.value);

        const middleNode = first.next;

        expect(middleNode.previous.value).toEqual(first.value)
        expect(middleNode.next.value).toEqual(last.value)
    })
});

describe('find function (firrs)', () => {
    it("should find object", () => {
        const list = new DoublyLinkedList<{ some: { value: string } }>();

        list.addFirst({some: {value: 'one'}});
        list.addFirst({some: {value: 'two'}});
        list.addFirst({some: {value: 'three'}});

        expect(list.find({some: {value: 'three'}}).value).toEqual({some: {value: 'three'}});
    });

    it("should find array of objects", () => {
        const list = new DoublyLinkedList<Array<{ some: { value: string } }>>();

        list.addFirst([{some: {value: 'one'}}]);
        list.addFirst([{some: {value: 'two'}}]);
        list.addFirst([{some: {value: 'three'}}]);

        expect(list.find([{some: {value: 'three'}}]).value).toEqual([{some: {value: 'three'}}]);
    });
});

describe('find function (last)', () => {
    it("should find object", () => {
        const list = new DoublyLinkedList<{ some: { value: string } }>();

        list.addLast({some: {value: 'one'}});
        list.addLast({some: {value: 'two'}});
        list.addLast({some: {value: 'three'}});

        expect(list.find({some: {value: 'three'}}).value).toEqual({some: {value: 'three'}});
    });

    it("should find array of objects", () => {
        const list = new DoublyLinkedList<Array<{ some: { value: string } }>>();

        list.addLast([{some: {value: 'one'}}]);
        list.addLast([{some: {value: 'two'}}]);
        list.addLast([{some: {value: 'three'}}]);

        expect(list.find([{some: {value: 'three'}}]).value).toEqual([{some: {value: 'three'}}]);
    });
})

describe('contains function', () => {
    it("contains", () => {
        const list = new DoublyLinkedList<{ some: { value: string } }>();
        list.addLast({some: {value: 'one'}});
        list.addLast({some: {value: 'two'}});
        list.addLast({some: {value: 'three'}});

        expect(list.contains({some: {value: 'three'}})).toEqual(true);
    })
})


describe('remove function', () => {
    it('should remove a node', () => {
        const list = new DoublyLinkedList<string>();

        list.addFirst('index 2');
        list.addFirst('will be removed');
        list.addFirst('index 1');
        list.addFirst('will be removed 2');
        list.addFirst('index 0');

        list.remove('will be removed');
        list.remove('will be removed 2');

        const first = list.getFirst();
        const last = list.getLast();

        expect(first.next.value).toEqual(last.previous.value);

        const middleNode = first.next;

        expect(middleNode.previous.value).toEqual(first.value);
        expect(middleNode.next.value).toEqual(last.value);
    });
})

describe('forEach function', () => {
    it('should remove a node', () => {
        const list = new DoublyLinkedList<string>();

        list.addFirst('index 2');
        list.addFirst('index 1');
        list.addFirst('index 0');

        const result = []
        list.forEach((value)=>{
            result.push(value);
        })

        let expected = ['index 0', 'index 1', 'index 2'];

        expect(result).toEqual(expected)

    });
})


