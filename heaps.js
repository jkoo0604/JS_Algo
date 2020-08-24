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

    remove() { // extract maximum (for MinBinaryHeap, extract min)
        // swap with the last element in the array, and compare the new root with its children, and swap with the largest children (greater than itself)
        if (this.values.length === 0) return null;
        var removed = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        if (this.values.length === 0) return removed;        
        // console.log(this.values);
        var idx = 0;
        var childLeft = (2 * idx) + 1;
        var childRight = (2 * idx) + 2;
        while (this.values[idx] < this.values[childLeft] || this.values[idx] < this.values[childRight]) {
            var temp = this.values[idx];
            var changeIdx = !this.values[childRight] ? childLeft : (this.values[childLeft] > this.values[childRight] ? childLeft : childRight);
            this.values[idx] = this.values[changeIdx];
            this.values[changeIdx] = temp;
            idx = changeIdx;
            childLeft = (2 * idx) + 1;
            childRight = (2 * idx) + 2;
        }
        console.log(this.values);
        return removed;
    }
}

var mbh = new MaxBinaryHeap();
console.log(mbh.insert(41));
console.log(mbh.insert(39));
console.log(mbh.insert(33));
console.log(mbh.insert(18));
console.log(mbh.insert(27));
console.log(mbh.insert(12));
console.log(mbh.insert(55));
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.remove());
console.log(mbh.insert(48));