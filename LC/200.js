/*Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:

Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    const markVisited = (i, j) => {
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0) return;
        if (grid[i][j] === '0') return;
        
        grid[i][j] = '0';
        markVisited(i - 1, j);
        markVisited(i + 1, j);
        markVisited(i, j - 1);
        markVisited(i, j + 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                markVisited(i, j);
                count++;
            }
        }
    }
    
    return count;
};