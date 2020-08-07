// given base and exponent, return power of the base to the exponent
// mimic functionality of Math.pow()
// ignore negative bases and exponents

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp-1);
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16

console.log('*'.repeat(40));

// factorial

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(1)) //1
console.log(factorial(2)) //2
console.log(factorial(4)) //24
console.log(factorial(7)) //5040

console.log('*'.repeat(40));

// return product of all elements in array of numbers

// function productOfArray(arr) {
//     var prod = 1;
//     function helper(arr) {
//         if (arr.length === 0) return 1;
//         prod *= arr[0];
//         return helper(arr.slice(1));
//     }
//     helper(arr);
//     return prod;
// }
function productOfArray(arr) {   
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

console.log('*'.repeat(40));

// given num, add up all numbers from 0 to the num

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num-1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55

console.log('*'.repeat(40));

// fibonacci sequence

function fib(num) {
    if (num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
