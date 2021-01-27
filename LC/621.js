/*
Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.

Example 3:

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    //     let map = new Map();
    //     let last = new Map();
    //     let keys = new Set();
    //     let order = [];
        
    //     if (n === 0) return tasks.length;
        
    //     for (let i=0; i<tasks.length; i++) {
    //         map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
    //         keys.add(tasks[i]);
    //     }
        
    //     while (keys.size) {
    //         let len = order.length;
    //         let inserted = false;
    //         for (let task of keys.values()) {
    //             if (last.has(task) && last.get(task) + n + 1 > len) {
    //                 continue;
    //             } else {
    //                 order.push(task);
    //                 inserted = true;
    //                 last.set(task, len);
    //                 if (map.get(task) === 1) {
    //                     map.delete(task);
    //                     keys.delete(task);
    //                 } else {
    //                     map.set(task, map.get(task) - 1);
    //                 }
    //                 break;
    //             }
    //         }
    //         if (!inserted) order.push('idle');
    //     }
        
    //     return order.length;
        let map = new Map();
        let maxFreq = 0;
        let countMax = 0;
        
        if (n === 0) return tasks.length;
        
        for (let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }
        
        for (let val of map.values()) {
            maxFreq = Math.max(maxFreq, val);
        }
        
        for (let val of map.values()) {
            if (val === maxFreq) countMax++;
        }
        
        return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + countMax);
    };