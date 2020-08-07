// given array of strings, capitalize first letter

function capitalizeFirst(arr) {
    if (arr.length === 0) return [];
    var newStr = arr[0][0].toUpperCase() + arr[0].slice(1);
    return [newStr].concat(capitalizeFirst(arr.slice(1)));    
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car', 'Taco', 'Banana']

console.log('*'.repeat(40));

// return sum of all even numbers in object which may contain nested objects

function nestedEvenSum(obj) {
    var evenSum = 0;
    function helper(tempObj) {
        for (let key in tempObj) {
            if (typeof tempObj[key] === 'object') {
                helper(tempObj[key]);
            } else if (tempObj[key] % 2 === 0) {
                evenSum += tempObj[key];
            }
        }
    }
    helper(obj);
    return evenSum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup'
        }
    }
}

var obj2 ={
    a: 2,
    b: {
        b: 2,
        bb: {
            b: 3,
            bb: {
                b: 2
            }
        }
    },
    c: {
        c: {
            c: 2
        },
        cc: 'ball',
        ccc: 5
    },
    d: 1,
    e: {
        e: {
            e: 2
        },
        ee: 'car'
    }
}

console.log(nestedEvenSum(obj1)) //6
console.log(nestedEvenSum(obj2)) //10

console.log('*'.repeat(40));

// given array of words, return new array with each word capitalized

function capitalizeWords(arr) {
    if (arr.length === 0) return [];
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])) // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log('*'.repeat(40));