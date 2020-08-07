// given array of strings, capitalize first letter

function capitalizeFirst(arr) {
    if (arr.length === 0) return [];
    var newStr = arr[0][0].toUpperCase() + arr[0].slice(1);
    return [newStr].concat(capitalizeFirst(arr.slice(1)));    
}
// function capitalizeFirst (array) {
//     if (array.length === 1) {
//         return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     res.push(string);
//     return res;
// }

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
// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

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

// function capitalizeWords (array) {
//     if (array.length === 1) {
//         return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;  
// }

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])) // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log('*'.repeat(40));

// given object find all values that are numbers and convert them to strings

// function stringifyNumbers(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             stringifyNumbers(obj[key]);
//         }
//         else if (!isNaN(obj[key]) && typeof obj[key] !== 'boolean') {
//             obj[key] = obj[key].toString();
//         }
//     }
//     return obj;
// }

//return new obj
function stringifyNumbers(obj) {
    var newObj = {...obj};
    function helper(tempObj) {
        for (let key in tempObj) {
            if (typeof tempObj[key] === 'object') {
                tempObj[key] = stringifyNumbers(tempObj[key]);
            }
            else if (!isNaN(tempObj[key]) && typeof tempObj[key] !== 'boolean') {
                tempObj[key] = tempObj[key].toString();
            } else {
                tempObj[key] = tempObj[key];
            }
        }
    }
    helper(newObj);
    return newObj;
}

// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//         if (typeof obj[key] === 'number') {
//             newObj[key] = obj[key].toString();
//         } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

let obj3 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj3))

/* {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

console.log('*'.repeat(40));

// given an object return an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    var returnArr = [];
    function helper(tempObj) {
        for (var key in tempObj) {
            if (typeof tempObj[key] === 'object') {
                helper(tempObj[key]);
            } else if (typeof tempObj[key] === 'string') {
                returnArr.push(tempObj[key]);
            }
        }
    }
    helper(obj);
    return returnArr;
}
// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }
//     return stringsArr;
// }

let obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj4)) // ["foo", "bar", "baz"])