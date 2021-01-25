/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = new Map();
    
    const sortStr = str => {
        let temp = str.split('');
        return temp.sort().join('');
    }
    
    for (let i=0; i<strs.length; i++) {
        let sortedStr = sortStr(strs[i]);
        if (!res.has(sortedStr)) {
            res.set(sortedStr, []);
        }
        res.get(sortedStr).push(strs[i]);
    }
    
    return [...res.values()];
};