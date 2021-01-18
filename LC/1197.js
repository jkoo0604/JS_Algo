/*
In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

Example 1:

Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]

Example 2:

Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let visited = new Set();
    let queue = [[0, 0, 0]]
    
    while (queue.length) {
        let [x1, y1, count] = queue.shift();
        
        if (x1 === x && y1 === y) return count;
        
        if (!visited.has(x1+','+y1)) {
            visited.add(x1+','+y1);
            queue.push([x1 + 2, y1 + 1, count + 1]);
            queue.push([x1 + 1, y1 + 2, count + 1]);
            queue.push([x1 + 2, y1 - 1, count + 1]);
            queue.push([x1 + 1, y1 - 2, count + 1]);
            queue.push([x1 - 2, y1 + 1, count + 1]);
            queue.push([x1 - 1, y1 + 2, count + 1]);
            queue.push([x1 - 2, y1 - 1, count + 1]);
            queue.push([x1 - 1, y1 - 2, count + 1]);
        }
    }
    
};