class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print2() {
        if (this.size === 0) {
            console.log('******');
            console.log('first: ', this.first);
            console.log('last: ', this.last);
            console.log('size: ', this.size);
            console.log('******');
        }
        else 
        {
            let runner = this.first;
            let arr = [];
            while (runner) {
                arr.push(runner.val);
                runner = runner.next;
            }
            console.log('******');
            console.log(arr);
            console.log('first: ', this.first.val);
            console.log('last: ', this.last.val);
            console.log('size: ', this.size);
            console.log('******');
        }
    }

    print() {
        let runner = this.first;
        let arr = [];
        while (runner) {
            arr.push(runner.val);
            runner = runner.next;
        }
        console.log('******');
        arr ? console.log(arr) : '';
        console.log('first: ', this.first ? this.first.val : this.first);
        console.log('last: ', this.last ? this.last.val : this.last);
        console.log('size: ', this.size);
        console.log('******');
    }

    push(val) {
        var newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (this.size === 0) {
            return 0;
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

var stack = new Stack();
// stack.push(13);
// stack.push(15);
// stack.push(18);
// stack.push(20);
// stack.push(25);
// stack.push(35);
stack.push(42);
stack.print();
console.log(stack.pop());
stack.print();