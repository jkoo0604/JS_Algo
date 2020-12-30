/*Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    
    const findPalindrome = (i, j) => {
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
        }
        
        return s.substring(i + 1, j);
    }
    
    for (let i = 0; i < s.length; i++) {
        let odd = findPalindrome(i, i);
        let even = findPalindrome(i, i + 1);
        
        let longer = odd.length > even.length ? odd : even;
        if (longer.length > longest.length) longest = longer;
    }
    
    return longest;
};