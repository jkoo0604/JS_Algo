/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].


Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let decoded = '';
    let count, substr, start, open, close;
    
    const findBrackets = str => {
        if (!str.length) return str;
        if (str.indexOf('[') === -1) return str;
        
        let i = 0;
        start = open = close = -1;
        while (i < str.length) {
            if (str[i] === '[') {
                open = i;
            } else if (str[i] === ']' && i > open) {
                close = i;
                break;
            }
            i++;
        }       
        
        i = open - 1;
        while (i >= 0) {
            if (isNaN(+str[i])) {
                break;
            }
            i--;
        }
        
        start = i + 1;
        count = +str.substring(start, open);
        substr = str.substring(open + 1, close);
        
        substr = substr.repeat(count);
        
        let newStr = str.substring(0, start) + substr + str.substring(close + 1);
        return findBrackets(newStr);
    }
    
    return findBrackets(s);   
};