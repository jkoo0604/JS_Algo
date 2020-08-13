// data needs to be numbers (strings, etc. need to be converted into numbers)
function radixSort(arr) {
    var loopCount = maxDigit(arr);
    for (var k=0; k<loopCount; k++) {
        let bucket = [[],[],[],[],[],[],[],[],[],[]];
        for (var i=0; i<arr.length; i++) {
            let currentDigit = getDigit(arr[i], k);
            bucket[currentDigit].push(arr[i]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

function getDigit(num,position) {
    var numStr = Math.abs(num).toString();
    if (position > numStr.length-1) return 0;
    return +numStr[numStr.length-1-position];
}

function digitCount(num) {
    var newNum = Math.abs(num);
    if (newNum === 0) return 1;
    return Math.floor(Math.log10(newNum))+1;
}

function maxDigit(arr) {
    var max = 0;
    for (var i=0;i<arr.length;i++) {
        let currentDigit = digitCount(arr[i]);
        if (currentDigit > max) max = currentDigit;
    }
    return max;
}

console.log(radixSort([23,345,5467,12,2345,9852]))

// console.log(getDigit(12345, 0))
// console.log(getDigit(12345, 1))
// console.log(getDigit(12345, 4))
// console.log(getDigit(12345, 5))
