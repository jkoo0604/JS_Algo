/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;    
    let minutes = 0;
    let rotten = [];
    let freshCount = 0;
    
    // add rotten cell to queue
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 2) {
                rotten.push([i, j]);
            }
            if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    
    if (!rotten.length) {
        // no fresh => only empty ones
        if (freshCount === 0) return 0;
        // if fresh => no rotten
        if (freshCount > 0) return -1;        
    }
    
    const markRotten = () => {
        if (!rotten.length) return;
        let tempQueue = [];
        
        for (let i=0; i<rotten.length; i++) {
            let [row, col] = rotten[i];
            if (row-1>=0 && grid[row-1][col] === 1) {
                grid[row-1][col] = 2;
                freshCount--;
                tempQueue.push([row-1, col]);
            }
            if (row+1<m && grid[row+1][col] === 1) {
                grid[row+1][col] = 2;
                freshCount--;
                tempQueue.push([row+1, col]);
            }
            if (col-1>=0 && grid[row][col-1] === 1) {
                grid[row][col-1] = 2;
                freshCount--;
                tempQueue.push([row, col-1]);
            }
            if (col+1<n && grid[row][col+1] === 1) {
                grid[row][col+1] = 2;
                freshCount--;
                tempQueue.push([row, col+1]);
            }           
        }
        rotten = [...tempQueue];
    }
    
    while (rotten.length) {        
        console.log('before', rotten, minutes);
        markRotten();
        console.log('after', rotten, minutes);
        minutes++;
    }
    
    if (freshCount > 0) return -1;
    return minutes-1;
};