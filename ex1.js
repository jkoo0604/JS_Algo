class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
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
        if (!this.length) return undefined;
        
        var removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removed;
        }

        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }

        this.tail = runner;
        this.tail.next = null;
        this.length--;
        return removed;
    }

    get(idx){
        if (idx >= this.length) return null;
        var counter = 0;
        var runner = this.head;
        while (counter < idx) {
            runner = runner.next;
            counter++;
        }
        return runner;
    }

    insert(idx, val){
        if (idx > this.length || idx < 0) return false;
        var newNode = new Node(val);
        var counter = 0;
        var runner = this.head;
        
        if (idx === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            while (counter < idx - 1) {
                runner = runner.next;
                counter++;
            }
            newNode.next = runner.next;
            runner.next = newNode;
        }

        this.length++;
        return true;
    }

    rotate(idx) {
        if (this.length <= 1) return this;
        var index = idx % this.length;
        if (index === 0) return this;
        if (index < 0) index += this.length;
        var counter = 0;
        var runner = this.head;
        while (counter < index - 1) {
            runner = runner.next;
            counter++;
        }

        this.tail.next = this.head;
        this.head = runner.next;
        this.tail = runner;
        this.tail.next = null;

        return this;
    }

    set(idx, val) {
        if (idx < 0 || idx >= this.length) return false;
        var counter = 0;
        var runner = this.head;
        while (counter < idx) {
            runner = runner.next;
            counter++;
        }
        runner.val = val;
        return true;
    }
}
