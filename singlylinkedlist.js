class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    print() {
        if (this.length === 0) console.log('empty');
        else {
            var runner = this.head;
            console.log('******');
            while (runner) {
                console.log(runner.val);
                runner = runner.next;
            }
            console.log('head: ', this.head);
            console.log('tail: ', this.tail);
            console.log('length: ', this.length);
            console.log('******');
        }
    }

    push(val) {
        var newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;
        var runner = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return runner;
        } 
        while (runner.next.next) {
            runner = runner.next;
        }
        var removed = runner.next;
        this.tail = runner;
        this.tail.next = null;
        this.length--;
        return removed;
    }

    shift() {
        if (!this.head) return null;
        var currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }

    unshift(val) { // add to front
        var newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (!this.head || this.length <= idx || idx < 0) return null;
        if (idx === 0) return this.head;    
        var runner = this.head;
        var counter = 0;
        while (counter < idx) {
            runner = runner.next;
            counter++;
        }
        return runner;
    }

    set(idx, val) { // update value at index
        var node = this.get(idx);
        if (!node) return false;
        node.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) this.unshift(val);
        else if (idx === this.length) this.push(val);
        else {
            var prevNode = this.get(idx-1);
            var newNode = new Node(val);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();
        var prevNode = this.get(idx-1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    reverse() {
        if (this.length <= 1) return this;
        var left = this.head;
        var middle = left.next;
        var right = middle.next;
        this.head = this.tail;
        this.tail = left;
        left.next = null;
        while (middle) {
            middle.next = left;
            left = middle;
            middle = right;
            if (right) right = right.next;
        }
        return this;

    }
}

var list = new SLL();
// console.log(list.push(13));
// console.log(list.pop());
// console.log(list);
console.log(list.push(15));
console.log(list.push(18));
// console.log(list.push(20));
// console.log(list.push(25));
// console.log(list.shift());
// list.print();
// console.log(list.unshift(3));
list.print();
// console.log(list.get(3))
// console.log(list.get(5))
// console.log(list.set(3,4))
// console.log(list.insert(3,35));
// list.print();
// console.log(list.remove(3));
// list.print();
console.log(list.reverse());
list.print();


