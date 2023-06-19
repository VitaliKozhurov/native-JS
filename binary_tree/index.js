// класс для создания узла дерева
class Node {
    constructor(itemValue) {
        this.value = itemValue;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    // при создании дерева оно пустое
    constructor() {
        this.root = null;
    }
    addItem(itemValue) {
        const newNode = new Node(itemValue);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // корень, левое, правое
    preOrder(node, callBack) {
        if (!node) {
            return;
        }
        if (callBack) {
            callBack(node);
        }
        this.preOrder(node.left, callBack);
        this.preOrder(node.right, callBack);
    }
    // левое, корень, правое
    inOrder(node, callBack) {
        if (!node) {
            return;
        }
        this.preOrder(node.left, callBack);
        if (callBack) {
            callBack(node);
        }
        this.preOrder(node.right, callBack);
    }
    // левое, правое, корень
    postOrder(node, callBack) {
        if (!node) {
            return;
        }
        this.preOrder(node.left, callBack);
        this.preOrder(node.right, callBack);
        if (callBack) {
            callBack(node);
        }
    }
    traverseDFS(callBack, method) {
        if (method === "preOrder") {
            return this.preOrder(this.root, callBack);
        }
        if (method === "inOrder") {
            return this.inOrder(this.root, callBack);
        }
        if (method === "postOrder") {
            return this.postOrder(this.root, callBack);
        }
    }

    traverseBFS(callBack) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            callBack(node);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }
}

const tree = new BinaryTree();
tree.addItem(5);
tree.addItem(3);
tree.addItem(7);
tree.addItem(1);
tree.addItem(8);

console.log(tree.traverseBFS((node) => console.log(node.value)));
