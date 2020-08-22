// binary heap: similar to bst, with different rules
// MaxBinaryHeap - parent nodes are always larger than child nodes
// MinBinaryHeap - parent nodes are always smaller than child nodes
// no guarantees  between siblings
// binary heap is as compact as possible. all children of each node are as full as they can be and left children are filled out first

// binary heaps are used to implement priority queues and graph traversal algos

// when used in arrays, index of left child of a parent node at index n is 2n+1, right child at 2n+2
// given a child at n, parent is at index floored (n-1)/2


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        // push into array first, compare with parent and swap until in correct spot
        this.values.push(val);
        if (this.values.length === 1) return this;
        var newIdx = this.values.length-1;
        var parentIdx = Math.floor((newIdx-1)/2);
        while (this.values[parentIdx] < this.values[newIdx]) {
            this.values[newIdx] = this.values[parentIdx];
            this.values[parentIdx] = val;
            newIdx = parentIdx;
            parentIdx = Math.floor((newIdx-1)/2);
        }
        return this;
    }
}

var mbh = new MaxBinaryHeap();
console.log(mbh.insert(10));
console.log(mbh.insert(50));
console.log(mbh.insert(25));
console.log(mbh.insert(15));