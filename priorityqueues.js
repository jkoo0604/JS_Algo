class PriorityNode {
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

class priorityQueue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
        this.highestPriority = new SLL();
    }

    // enqueue into the rear of the queue, if highest priority, update
    // the highestPriority array / stack
    enqueue(node){}

    // dequeue the last node, no matter the priority.

    // if this node was our previous highest priority, pop
    // from the highestPriority array
    dequeue(){}

    // pull highest priority element
    dequeueHighestPriority(){}

    // look at the front node
    peekFront(){}

    // look at the back node
    peekBack(){}

    // check if empty
    isEmpty(){}

    // return the final value in the .highestPriority
    getHighestPriority(){}
}