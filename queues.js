class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print() {
        let runner = this.first;
        let arr = [];
        while (runner) {
            arr.push(runner.val);
            runner = runner.next;
        }
        console.log('******');
        console.log(arr);
        console.log('first: ', this.first ? this.first.val : this.first);
        console.log('last: ', this.last ? this.last.val : this.last);
        console.log('size: ', this.size);
        console.log('******');
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue() { //remove first
        if (this.size === 0) {
            return null;
        } else {
            var removed = this.first;
            if (this.size === 1) {
                this.last = null;
            }
            this.first = removed.next;
            removed.next = null;
        }
        this.size--;
        return removed.val;
    }

}

var queue = new Queue();
// queue.enqueue(13);
// queue.enqueue(15);
// queue.enqueue(18);
// queue.enqueue(20);
// queue.enqueue(25);
// queue.enqueue(35);
queue.enqueue(42);
queue.print();
console.log(queue.dequeue());
queue.print();