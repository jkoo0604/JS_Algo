// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

// Input: s = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.

// Input: s = "1"
// Output: 1


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0;
    
    let ways = new Array(s.length + 1).fill(0);
    ways[0] = 1;
    ways[1] = 1;
    
    for (let i = 2; i <= s.length; i++) {
        // s[i-2] plus two digits
        // if s[i-1] > 2 or s[i-1] === 2 &&& s[i] > 6 then not possible
        let twoDigits = +s.substring(i - 2, i);
        if (twoDigits >= 10 && twoDigits <= 26) {
            ways[i] += ways[i - 2];
        }
        
        // s[i-1] plus one digit
        // if s[i-1] === 0 then not possible
        if (s[i - 1] !== '0') {
            ways[i] += ways[i - 1];
        }
    }
    
    return ways[s.length];
    
};