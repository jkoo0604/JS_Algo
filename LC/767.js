/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"

Example 2:

Input: S = "aaab"
Output: ""

*/

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    // 'aaaaabbbbbcccc' 'abcabcabcabcab'
    // 'aaaaabbcc' 'ababacaca'
    let map = new Map();
    let maxFreq = 0;
    let total = S.length;
    let res = [];
    
    for (let i=0; i<S.length; i++) {
        map.set(S[i], (map.get(S[i]) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(S[i]));
    }
    
    if (maxFreq - 1 > total - maxFreq) return '';
    
    let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    let index = 0;
    for (let [key, val] of sorted) {
        for (let i=0; i<val; i++) {
            if (index >= total) index = 1;
            res[index] = key;
            index += 2;
        }
    }    
    
    return res.join('');
    
    
};