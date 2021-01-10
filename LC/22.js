/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    
    const makeParentheses = (str, left, right) => {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (right < left || left < 0 || right < 0) {
            //invalid combo;
            return;
        }
                
        makeParentheses(str + '(', left - 1, right);
        makeParentheses(str + ')', left, right - 1);
    }
    
    makeParentheses('', n, n);
    
    return result;
};