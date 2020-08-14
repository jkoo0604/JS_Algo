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
        if (!this.head) return undefined;
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
        if (!this.head) return undefined;
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
        if (!this.head || this.length-1 < idx) return undefined;
        if (idx === 0) return this.head;    
        var runner = this.head;
        var counter = 0;
        while (counter < idx) {
            runner = runner.next;
            counter++;
        }
        return runner;
    }
}

var list = new SLL();
// console.log(list.push(13));
// console.log(list.pop());
// console.log(list);
console.log(list.push(15));
console.log(list.push(18));
console.log(list.push(20));
console.log(list.push(25));
console.log(list.shift());
console.log(list);
console.log(list.unshift(3));
console.log(list.get(3))
console.log(list.get(2))
console.log(list.get(1))
console.log(list.get(5))


