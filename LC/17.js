/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    
    let a = 97;
    let first = 2;
    let result = [''];
    
    const findNumbers = num => {
        num = +num;
        if (isNaN(num)) return [''];
        
        let charNum = a + (num - first) * 3 + (num > 7);
        let count = num === 9 || num === 7 ? 4 : 3;
        let chars = [];
        
        for (let i=0; i<count; i++) {
            chars.push(String.fromCharCode(charNum + i));
        }
               
        return chars;
    }
    
    const findCombinations = (i) => {
        if (i < 0 || i >= digits.length) return;
        
        let chars = findNumbers(digits[i]);
        // let chars = map[digits[i]].split('');
        let newResult = [];
        
        for (let i=0; i<result.length; i++){
            for (let j=0; j< chars.length; j++) {
                newResult.push(result[i] + chars[j]);
            }
        }
        result = newResult;
        return findCombinations(i+1);
    }
    
    findCombinations(0);
    
    return result;
    
    // const map = {
    //     2: 'abc',
    //     3: 'def',
    //     4: 'ghi',
    //     5: 'jkl',
    //     6: 'mno',
    //     7: 'pqrs',
    //     8: 'tuv',
    //     9: 'wxyz',
    // }
    // const map = [null, null, ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    
//     const combineArr = (arr1, arr2) => {
//         if (!arr1.length && !arr2.length) return [];
//         if (!arr1.length) return arr2;
//         if (!arr2.length) return arr1;
        
//         let result = [];
        
//         for (let i=0; i<arr1.length; i++) {
//             for (let j=0; j<arr2.length; j++) {
//                 result.push(arr1[i] + arr2[j]);
//             }
//         }
//         return result;
//     }
    
//     return digits.split('').reduce((acc, val) => {
//         let chars = map[+val];
//         return combineArr(acc, chars);        
//     }, [])
    
    
};