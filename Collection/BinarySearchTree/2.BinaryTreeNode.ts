/**
 * A node which contains a single data
 * item and pointers for the left and right child
 */
export class BinaryTreeNode<T> {
    data: T;
    left: BinaryTreeNode<T>;
    right: BinaryTreeNode<T>;


    constructor(data: T) {
        this.data = data;
    }
}

const root = new BinaryTreeNode<string>('root');

const left = new BinaryTreeNode<string>('left');
const right = new BinaryTreeNode<string>('right');

root.left = left;
root.right = right;

