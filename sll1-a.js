class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            return;
        };

        node.next = this.head;
        this.head = node;
        return;
    }

    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            return
        }

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    contains(value){
        // start at the head
        var runner = this.head;

        // while we have a runner
        while(runner){

            // return true if data === value
            if(runner.data === value){
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    recursiveContains(current, value){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(current.next, value);
    }

    removeHead(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    removeBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }

    //iterate the linked list and print the value of every node
    display(){
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    delete(data) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == data) {
            this.head = runner.next;
            return;
        }

        while (runner && runner.data !== data) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
    }

    reverse() {
        var prev = null;
        var current = this.head;
        var next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    nthFromLast(n) {
        if (this.head === null) {
            return this.head;
        }
        var runnerFast = this.head;
        var runnerSlow = this.head;
        var count = 0;
        while (runnerFast) {
            if (count >= n) {
                runnerSlow = runnerSlow.next;
            }
            runnerFast = runnerFast.next;
            count++;
        }
        return runnerSlow;
    }

    nthFromLast2(n) {
        if (this.head === null) {
            return this.head;
        }
        var runner = this.head;
        while (n > 0) {
            runner = runner.next;
            n--;
        }
        var secondRunner = this.head;
        while (runner) {
            runner = runner.next;
            secondRunner = secondRunner.next;
        }
        return secondRunner;
    }

    flip() {
        if (this.head == null | this.head.next == null) return;
        
        var runner = this.head;
        var runner1 = runner.next;
        var runner2 = runner1.next;
        this.head.next = null;

        while (runner1 != null) {
            this.head = runner1;
            runner1.next = runner;
            if (!runner2) {
                console.log('end');
                return;
            }
            runner=runner1;
            runner1=runner2;
            runner2=runner2.next;                    
        } 

    }

    average(){
        if(this.isEmpty())
            return null;
        let runner = this.head;
        let length = 0;
        let sum = 0;
        let avg = 0;
        while (runner !== null){
            sum += runner.data;//if sum triggers first you don't need to manually add it
            runner = runner.next;
            length++;
        }
        avg = sum / length;
        return avg;
    }

    getMiddleData(){
        if(this.isEmpty())
            return null;
        if(this.head.next==null)
            return null;
        let doublerunner =this.head;
        let midreturnrunner =this.head;
        while(doublerunner){
            doublerunner=doublerunner.next.next;
            midreturnrunner=midreturnrunner.next;
            if(doublerunner==null)
                return null;
            if(doublerunner.next==null)
                return midreturnrunner;
        }
        return null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Test
var mySLL = new SLL();

mySLL.head = new Node(7);
mySLL.head.next = new Node(8);