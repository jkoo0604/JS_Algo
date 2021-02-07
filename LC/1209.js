/*
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    let res = '';
    
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        // check if adjacent & equal - using last element in stack
        if (stack.length) {
            if (stack[stack.length-1][0] === char) {
                stack[stack.length-1][1]++;
                if (stack[stack.length-1][1] === k) {
                    stack.pop();
                }
            } else {
                stack.push([char, 1]);
            }            
        } else {
            stack.push([char, 1]);
        }
        // console.log(stack);
    }
    
    // console.log(stack);
    
    stack.forEach(el => {
        res += el[0].repeat(el[1]);
    })
    
    return res;
    
    
    
//     const remove = (str) => {
//         if (str.length < k) return str;
        
//         let i = 0;
//         let removed = false;
//         while (i < str.length) {
//             let found = false;
//             let counter = 1;
//             while (counter < k) {
//                 if (str[i+counter] !== str[i]) {
//                     break; 
//                 } else if (counter === k - 1) {
//                     found = true;
//                     break;
//                 }
//                 counter++;
//             }
//             if (found) {
//                 str = str.slice(0, i) + ('-').repeat(k) + str.slice(i + k);
//                 i += k - 1;
//                 removed = true;
//             }
//             i++;
//         }
        
//         if (!removed) return str;
        
//         str = str.replace(/-/g, '');
//         console.log(str);
        
//         return remove(str);
//     }
    
//     return remove(s);
};