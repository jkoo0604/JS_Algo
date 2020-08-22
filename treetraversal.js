// breadth first search
    // iteratively: create a queue and a variable to track nodes visited
    // place root node in the queue
    // loop (dequeue node from the queue and push the value of the node into the variable that stores the nodes)

// depth first search
    // pre order (recursively: call helper function to push value into output array on left then right)
    // post order (recursively: visit children first before adding parent value into output)
    // in order (recursively: left push right - output will be sorted)

// time complexity is similar between bfs-dfs, but space complexity differs
// for trees with large width and less depth, dfs is better (fewer nodes to keep track of)

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

    bfs() {
        var queue = [];
        var values = [];
        if (this.root) {
            var runner = this.root;
            queue.push(runner);
            while (queue.length > 0) {
                let popped = queue.shift();
                if (popped.left) queue.push(popped.left);
                if (popped.right) queue.push(popped.right);
                values.push(popped.val);
            }
        }
        return values;
    }

    dfsPreOrder() {
        function traverse(node) {
            values.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            return;
        }
        var values = [];
        if (this.root) {
            traverse(this.root);
        }
        return values;
    }

    dfsPostOrder() {
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            values.push(node.val);
            return;
        }
        var values = [];
        if (this.root) {
            traverse(this.root);
        }
        return values;
    }

    dfsInOrder() {
        function traverse(node) {
            if (node.left) traverse(node.left);
            values.push(node.val);
            if (node.right) traverse(node.right);
            return;
        }
        var values = [];
        if (this.root) {
            traverse(this.root);
        }
        return values;
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
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());