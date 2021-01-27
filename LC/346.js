/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:

MovingAverage(int size) Initializes the object with the size of the window size.
double next(int val) Returns the moving average of the last size values of the stream.

Example 1:

Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
*/
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.window = size;
    this.values = [];
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.values.push(val);
    
//     let idx = this.values.length-1;
//     let count = 1;
//     let sum = 0;
    
//     while (count <= this.window && idx >= 0) {
//         sum += this.values[idx];
//         count++;
//         idx--;
//     }
    
//     return sum / (count - 1); 
    
    if (this.values.length > this.window) {
        this.sum -= this.values.shift();
    }
    this.sum += val;
    
    return this.sum / this.values.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */