function countZeroes(arr) {
    // var idx = 0;
    // while (idx < arr.length) {
    //     if (arr[idx] === 0) break;
    //     else if (idx === arr.length - 1) return 0;
    //     idx++;
    // }
    // if (idx === 0) return arr.length;
    // else return arr.length - idx;

    //divide & conquer - O(log n)

    if (!arr.length || arr[arr.length-1] === 1) return 0;
    if (arr[0] === 0) return arr.length;
    let left = 0;
    let right = arr.length-1;
    let mid;

    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            if (arr[mid-1] === 1) return arr.length - mid;
            right = mid - 1;
        } else {
            if (arr[mid+1] === 0) return arr.length - mid - 1;
            left = mid + 1;
        }
    }

    if (right === arr.length - 1) return 0;
    else return arr.length;
}

// given a sorted array and a number, count occurrence of number in array
// divide and conquer (o(log n))
function sortedFrequency(arr, num) {
    if (!arr.length || arr[0] > num || arr[arr.length - 1] < num) return -1;
    
    const count = (left, right) => {
        if (left > right) return 0;
        if (left === right && arr[right] !== num) return -1;
        if (arr[left] === num && arr[right] === num) return right - left + 1;

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > num) return count(left, mid - 1);
        else if (arr[mid] < num) return count(mid + 1, right);
        else return count(left, mid) + count(mid + 1, right);
    }

    let val = count(0, arr.length - 1);
    return val === 0 ? -1 : val;
}

// given a rotated array of sorted numbers and an integer, return the index of the integer in the array, or -1 if not found
// divide and conquer
function findRotatedIndex(arr, num) {
    if (!arr.length) return -1;

    const helper = (left, right) => {
        if (arr[left] === num) return left;
        if (arr[right] === num) return right;
        if (arr[left] < arr[right] && (num < arr[left] || num > arr[right])) return -1;
        if (left > right) return -1;
        if (left === right && arr[right] !== num) return -1;

        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) return mid;
        else if (num < arr[mid]) {
            if (arr[right] > arr[mid]) return helper(left, mid - 1);
            else return Math.max(helper(mid + 1, right), helper(left, mid - 1));
        } else {
            if (arr[left] < arr[mid]) return helper(mid + 1, right);
            else return Math.max(helper(mid + 1, right), helper(left, mid - 1));
        }
    
    }

    return helper(0, arr.length - 1);
}

// given anagram of a word, find all matches in the dictionary
function wordMatch(word, map) {
    // return array of matching words
    // map is an object

    function makeCombos(word) {
        if (word.length < 2) return [word];

        let permutations = [];
        for (let i=0; i<word.length; i++) {
            if (word.indexOf(word[i]) !==i) continue; // avoid duplicates
            let subPermutations = makeCombos(word.substring(0,i) + word.substring(i+1));
            for (let j=0; j<subPermutations.length; j++) {
                permutations.push(word[i] + subPermutations[j]);
            }
        }

        return permutations;

        // return makeCombos(word.substring(1)).map(combo => word[0] + combo);
    }

    let combos = makeCombos(word);
    console.log(combos);
    console.log(combos.length);
    let matches = [];
    // let matchesDict = {};
    // let dupe = [];
    for (let i=0; i<combos.length; i++) {
        if (map[combos[i]]) matches.push(combos[i]);
        // matchesDict[combos[i]] = (matchesDict[combos[i]] || 0) + 1;
        // if (matchesDict[combos[i]] > 1) dupe.push(combos[i]);
    }
    // console.log(dupe);
    return matches;
    
}

let testMap = {sport: 'word def', ports: 'word def', torps: 'word def', ocean: 'word def', soccer: 'word def'};
let testWord = 'strso';

console.log(wordMatch(testWord, testMap));