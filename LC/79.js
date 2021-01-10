/*
Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    
    const checkAdj = (i, j, k) => {
        if (k >= word.length) return true;
        if (i < 0 || i >= m || j < 0 || j >= n) return false;
        if (board[i][j] !== word[k]) return false;
        
        board[i][j] = '*';
        
        let down = checkAdj(i-1, j, k+1);
        let up = checkAdj(i+1, j, k+1);
        let right = checkAdj(i, j+1, k+1);
        let left = checkAdj(i, j-1, k+1);
        
        if (up || down || left || right) return true;        
        board[i][j] = word[k];
    }
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (board[i][j] === word[0]) {
                let checked = checkAdj(i, j, 0);
                if (checked) {
                    return true;
                }
            }
            
        }
    }
    
    return false;
};