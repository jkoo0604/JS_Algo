class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        if (this.length === 0) console.log('empty');
        else {
            let runner = this.head;
            let arr = [];
            while (runner) {
                arr.push(runner.val);
                runner = runner.next;
            }
            console.log('******');
            console.log(arr);
            console.log('head: ', this.head.val);
            console.log('tail: ', this.tail.val);
            console.log('length: ', this.length);
            console.log('******');
        }
    }

    printReverse() {
        if (this.length === 0) console.log('empty');
        else {
            let runner = this.tail;
            let arr = [];
            while (runner) {
                arr.push(runner.val);
                runner = runner.prev;
            }
            console.log('******');
            console.log(arr);
            console.log('head: ', this.head.val);
            console.log('tail: ', this.tail.val);
            console.log('length: ', this.length);
            console.log('******');
        }
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return null;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = removed.prev;
            newTail.next = null;
            this.tail = newTail;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }

    shift() {
        if (this.length === 0) return null;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = removed.next;
            this.head = newHead;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let runner;
        let counter;
        if (idx < Math.floor(this.length/2)) {
            runner = this.head;
            counter = 0;
            while (counter < idx) {
                runner = runner.next;
                counter++;
            }
        } else {
            runner = this.tail;
            counter = this.length-1;
            while (counter > idx) {
                runner = runner.prev;
                counter--;
            }
        }
        return runner;
    }

    set(idx, val) {
        let updateNode = this.get(idx);
        if (!updateNode) return false;
        updateNode.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) this.unshift(val);
        else if (idx === this.length) this.push(val);
        else {
            let newNode = new Node(val);
            let prevNode = this.get(idx-1);
            newNode.next = prevNode.next;
            prevNode.next.prev = newNode;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx === 0) return this.shift();
        if (idx === this.length-1) return this.pop();
        let removed = this.get(idx);
        if (!removed) return null;
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.prev = null;
        removed.next = null;
        this.length--;
        return removed;
    }

    reverse() {
        if (this.length <= 1) return this;
        var runner = this.head;
        var next = runner.next;
        var prev = null;
        this.head = this.tail;
        this.tail = runner;
        for (var i=0; i<this.length;i++) {
            runner.prev = next;
            next = runner.next;
            runner.next = prev;
            prev = runner;
            runner = next;
        }
        return this;
    }

}

var list = new DLL();
list.push(13);
list.push(15);
list.push(18);
list.push(20);
list.push(25);
list.push(35);
list.push(42);
list.pop();
list.print();
list.unshift(3);
list.print();
list.set(5,27);
list.print();
list.insert(5,23);
list.print();
console.log(list.remove(10));
console.log(list.remove(0));
list.print();
list.printReverse();

// console.log(list.pop());
// console.log(list);
// console.log(list.push(15));
// console.log(list.push(18));
// console.log(list.push(20));
// console.log(list.push(25));
// console.log(list.shift());
// list.print();
// console.log(list.unshift(3));
// list.print();
// console.log(list.get(3))
// console.log(list.get(5))
// console.log(list.set(3,4))
// console.log(list.insert(3,35));
// list.print();
// console.log(list.remove(3));
// list.print();
// console.log(list.reverse());
// list.print();