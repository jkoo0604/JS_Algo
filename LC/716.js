/*
Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.

Implement the MaxStack class:

MaxStack() Initializes the stack object.
void push(int x) Pushes element x onto the stack.
int pop() Removes the element on top of the stack and returns it.
int top() Gets the element on the top of the stack without removing it.
int peekMax() Retrieves the maximum element in the stack without removing it.
int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.
 

Example 1:

Input
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
Output
[null, null, null, null, 5, 5, 1, 5, 1, 5]

Explanation
MaxStack stk = new MaxStack();
stk.push(5);   // [5] the top of the stack and the maximum number is 5.
stk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.
stk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum, because it is the top most one.
stk.top();     // return 5, [5, 1, 5] the stack did not change.
stk.popMax();  // return 5, [5, 1] the stack is changed now, and the top is different from the max.
stk.top();     // return 1, [5, 1] the stack did not change.
stk.peekMax(); // return 5, [5, 1] the stack did not change.
stk.pop();     // return 1, [5] the top of the stack and the max element is now 5.
stk.top();     // return 5, [5] the stack did not change.
*/

/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.stack = [];
    this.max = -Infinity;
    this.maxIdx = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
    if (x >= this.max) {
        this.max = x;
        this.maxIdx = this.stack.length - 1;
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    let removed = this.stack.pop();
    this.max = -Infinity;
    for (let i=0; i<this.stack.length; i++) {
        if (this.stack[i] >= this.max) {
            this.max = this.stack[i];
            this.maxIdx = i;
        }
    }
    return removed;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let removed = this.stack.splice(this.maxIdx, 1)[0];
    this.max = -Infinity;
    for (let i=0; i<this.stack.length; i++) {
        if (this.stack[i] >= this.max) {
            this.max = this.stack[i];
            this.maxIdx = i;
        }
    }
    return removed;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */