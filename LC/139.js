/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let words = new Set(wordDict);
    let visitQueue = [0];
    let visitedIdx = new Set();
    
    while (visitQueue.length) {
        let start = visitQueue.shift();
        if (!visitedIdx.has(start)) {
            for (let end = start+1; end<=s.length; end++) {
                if (words.has(s.slice(start, end))) {
                    // return if at the end of str
                    if (end === s.length) return true;
                    // if not, push next idx into the visit queue
                    visitQueue.push(end);
                }
            }
            visitedIdx.add(start);
        }
        
    }
    return false;
};