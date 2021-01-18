/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.
*/

function firstNotRepeatingCharacter(s) {
    let map = new Map();
    
    for (let i=0; i<s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    
    console.log(map);
    
    for (let [key, val] of map.entries()) {
        if (val === 1) return key;
    }
    
    return '_';
}
