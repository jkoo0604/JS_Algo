/*
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

Example 1:

Input: s = "3+2*2"
Output: 7

Example 2:

Input: s = " 3/2 "
Output: 1

Example 3:

Input: s = " 3+5 / 2 "
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/\s/g,'');
    console.log(s);
    
    let stack = [];
    let curr = '';
    let operation = '+';
    
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        let temp;
        
        if (!isNaN(parseInt(char))) {
            curr += char;
        } 
        if (isNaN(parseInt(char)) || i === s.length - 1){
            if (operation === '*') {
                temp = stack.pop() * parseInt(curr);
            } else if (operation === '/') {
                let last = stack.pop();
                temp = last < 0 ? Math.ceil(last / parseInt(curr)) : Math.floor(last / parseInt(curr));
            } else if (operation === '-') {
                temp = -1 * parseInt(curr);
            } else {
                temp = parseInt(curr);
            }
            stack.push(temp);
            operation = char;
            curr = '';
        } 
    }
    console.log(stack);
    
    return stack.reduce((acc, curr) => {
        return acc + curr;
    },0);
    
//     const calculate = (s, operation) => {
//         let idx;
//         if (operation === 'multDiv') {
//             idx = s.indexOf('*');
//             if (idx === -1 || (s.indexOf('/') !== -1 && s.indexOf('/') < idx)) {
//                 idx = s.indexOf('/');
//             }
//         } else {
//             idx = s.indexOf('+');
//             if (idx === -1 || (s.indexOf('-') !== -1 && s.indexOf('-') < idx)) {
//                 idx = s.indexOf('-');
//             }
//         }        
//         // console.log('idx', idx);
        
//         if (idx === -1 || idx === 0) return s;
        
//         let start = idx - 1;
//         let end = idx + 1;
//         let operator = s[idx];
//         let temp;
        
//         while (start >= 0 && (s[start] !== '+' && s[start] !== '-' && s[start] !== '/' && s[start] !== '*')) {
//             // console.log(s[start], s[start] === '+')
//             start--;
//         }
        
//         while (end < s.length && (s[end] !== '+' && s[end] !== '-' && s[end] !== '/' && s[end] !== '*')) {
//             end++;
//         }
        
//         start++;
        
//         if (operator === '*') {
//             temp = Math.floor(parseInt(s.slice(start, idx)) * parseInt(s.slice(idx+1, end)));
//             // console.log('mult', s.slice(start, idx), s.slice(idx+1, end), temp)
//         } else if (operator === '/') {
//             temp = Math.floor(parseInt(s.slice(start, idx)) / parseInt(s.slice(idx+1, end)));
//             // console.log('div', temp)
//         } else if (operator === '+') {
//             temp = Math.floor(parseInt(s.slice(start, idx)) + parseInt(s.slice(idx+1, end)));
//             // console.log('add', temp)
//         } else {
//             temp = Math.floor(parseInt(s.slice(start, idx)) - parseInt(s.slice(idx+1, end)));
//             console.log('subtr', temp)
//         }
        
//         let newStr = s.slice(0, start) + temp.toString() + s.slice(end);
//         // console.log(s, newStr);
        
//         return calculate(newStr, operation);        
//     }
    
//     let first = calculate(s, 'multDiv');
//     console.log(first);
//     let second = calculate(first, 'addSubtr');
//     console.log(second);
    
//     return parseInt(second);
    
    
};