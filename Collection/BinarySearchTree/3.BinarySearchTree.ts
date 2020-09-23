/**
 * A binary tree
 *
 * where nodes with "lessor" values
 * are placed to the left of the root,
 *
 * and nodes with "equal" or "greater" values
 * are placed to the right
 *
 *
 * Insertion complexity:
 * Average case: O(log n)
 * Worst case: O(n), like Linked List
 *
 * Traversal Operations
 * 1. Visit the left child
 * 2. Visit the right child
 * 3. Process the current value
 *
 *
 * TREE TRAVERSALS:
 * Complexity:
 * Average: O(n)
 * Worst case: O(n)
 *
 * 1. PRE-ORDER:
 *      The node is visited before it's children;
 *      - Process the current value
 *      - Visit the left child
 *      - Visit the right child
 * 2. IN-ORDER:
 *      The left child is visited before the node,
 *      then the right child;
 *      - Visit the left child;
 *      - Process the current value;
 *      - Visit the right child
 * 3. POST-ORDER
 *      The left and right children
 *      are visited before the node
 *      - Visit the left child;
 *      - Visit the right child;
 *      - Process the current value;
 *
 *
 *      SEARCHING:
 *      Complexity:
 *      Average:    O(log n)
 *      Worst case: O(n)
 *
 */
import { BinaryTreeNode } from "./2.BinaryTreeNode";

class BinarySearchTree<T> {

    root: BinaryTreeNode<T>

    // ========== PRE-ORDER =================
    preOrderTraversalRoot(action: Function) {
        this.preOrderTraversal(action, this.root);
    }

    preOrderTraversal(action: Function, node: BinaryTreeNode<T>) {
        if (node != null) {
            action(node);
            this.preOrderTraversal(action, node.left);
            this.preOrderTraversal(action, node.right);
        }
    }

    // =================== IN-ORDER ===============
    inOrderTraversalRoot(action: Function) {
        this.inOrderTraversal(action, this.root);
    }

    inOrderTraversal(action: Function, node: BinaryTreeNode<T>) {
        if (node != null) {
            this.inOrderTraversal(action, node.left);
            action(node);
            this.inOrderTraversal(action, node.right);
        }
    }

    // =================== IN-ORDER ===============
    postOrderTraversalRoot(action: Function) {
        this.inOrderTraversal(action, this.root);
    }

    postOrderTraversal(action: Function, node: BinaryTreeNode<T>) {
        if (node != null) {
            this.inOrderTraversal(action, node.left);
            this.inOrderTraversal(action, node.right);
            action(node);
        }
    }

}

/**
 * PRE-ORDER
 */
const exampleOfCopyingATree = () => {
    const original = new BinarySearchTree<string>();
    const copy = new BinarySearchTree<string>();

    original.inOrderTraversalRoot((value) => copy.add(value));
}

/**
 * IN_ORDER
 */
const exampleOfPrintValuesInSortOrder = () => {
    const tree = new BinarySearchTree<string>();

    tree.inOrderTraversalRoot((value) => console.log(value));
}

/**
 * POST_ORDER
 * We need to delete leaves first
 */
const exampleOfDeleteElementsFromATree = () => {
    const tree = new BinarySearchTree<string>();

    tree.inOrderTraversalRoot((value) => console.log(value));
}


/*

Example:

==== BALANCED binary search tree ====
O(log n) operations
           12
          /  \
         7    14
        / \    \
       3   7    18

Smallest value will
 be the most LEFT node

 And the greatest value will
  be the RIGHT most node

==== UNBALANCED binary search tree ====
 O(n) operations
 Just like Linked list

             3
              \
               7
                \
                 7
                  \
                   12

 */

