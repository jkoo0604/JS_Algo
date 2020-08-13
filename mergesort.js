function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(arr1, arr2) {
    var i=0;
    var j=0;
    var result = [];
    while (i<arr1.length && j<arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    if (i<arr1.length) {
        while (i<arr1.length) {
            result.push(arr1[i]);
            i++;
        }
    } else {
        while (j<arr2.length) {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

console.log(mergeSort([13,7,0,6,30]))
console.log(mergeSort([65,0,42,-5,8,32,1]))
console.log(mergeSort([1,2,3,4,5]))

// console.log(merge([3,5,38,44], [15,26,36,47]))
// console.log(merge([1,10,50], [2,14,99,100]))