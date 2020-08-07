function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 0) return 0;
    var start = 0;
    var end = 0;
    var charIdx = {};
    var maxLen = -Infinity;
    var maxStr = '';
    while (end < str.length) {
        let char = str[end];
        if (charIdx.hasOwnProperty(char) && charIdx[char] >= start) {
            start = charIdx[char] + 1;
        }
        charIdx[char] = end;
        if (end-start+1 > maxLen) {
            maxStr = str.substring(start, end+1);
        }
        maxLen = Math.max(maxLen, end-start+1);
        console.log(str.substring(start, end+1));
        end++;
    }
    return maxStr;
  }

// console.log(findLongestSubstring(''))
// console.log(findLongestSubstring('rithmschool'))
// console.log(findLongestSubstring('thisisawesome'))
// console.log(findLongestSubstring('thecatinthehat'))
// console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
// console.log(findLongestSubstring('thisishowwedoit'))