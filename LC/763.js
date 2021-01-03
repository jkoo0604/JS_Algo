/*
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let left = 0;
    let right = 0;
    let answer = [];
    let seen = new Map();
    
    for (let i=0; i<S.length; i++) {
        seen.set(S[i], i);
    }
    
    for (let i=0; i<S.length; i++) {
        right = Math.max(right, seen.get(S[i]));
        if (i === right) {
            answer.push(i - left + 1);
            left = i + 1;
        }
    }
    return answer;
    
};