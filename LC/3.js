// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Input: s = ""
// Output: 0


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    
    let seen = new Set();
    let maxLen = 0;
    let i=0;
    let j=0;
    
    while (j < s.length) {
        let char = s[j];
        if (!seen.has(char)) {
            seen.add(char);
            j++;
            maxLen = Math.max(maxLen, seen.size);
        } else {
            seen.delete(s[i]);
            i++;
        }
    }
    
    return maxLen;
};