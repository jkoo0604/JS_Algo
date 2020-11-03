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
}
