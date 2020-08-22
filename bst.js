// at most two children
// all members less than a parent is on the left, all those greater on the right

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var runner = this.root;
        var next = this.root;
        while (next) {
            runner = next;
            if (val > runner.val) {
                next = runner.right;
            } else if (val < runner.val) {
                next = runner.left;
            } else {
                return null;
            }
        }
        if (val > runner.val) {
            runner.right = newNode;
        } else if (val < runner.val) {
            runner.left = newNode;
        } else {
            return null;
        }
        // console.log(runner);
        return this;
    }

    find(val) {
        if (!this.root) return false;
        var runner = this.root;
        while (runner) {
            if (val > runner.val) {
                runner = runner.right;
            } else if (val < runner.val) {
                runner = runner.left;
            } else {
                return true;
            }
        }
        return false;
    }
}

var tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(2));
console.log(tree.insert(7));
console.log(tree.insert(11));
console.log(tree.insert(16));
console.log(tree.insert(13));
console.log(tree.find(20));
console.log(tree.find(16));
