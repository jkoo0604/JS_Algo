// like Dictionary in Python, Objects/Maps in JS, etc.
// key-value pairs


// implement a hash table using an array
// convert keys into valid array indices using hash functions
// must be constant time, distributes outputs uniformly, deterministic (same input yields same output)
// prime number in hash helps spread out keys more uniformly
// also helps if table size is a prime number

// collions are inevitable
// strategies to handle collisions
//      separate chaining: at each index in our array, store values using arrays or linked lists to store multiple key-value pairs at the same index
//      linear probing: when a collision occurs, search through array to find the next empty slot

class HashTable {
    constructor(size=13) { // uses a prime number as default size
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i=0; i<Math.min(key.length, 100); i++) { // only use up to the first 100 characters to loop through -> keep the hashing at O(0)
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
        return [key, value];
    }

    get(key) {
        let hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) return null;
        let arr = this.keyMap[hashedKey];
        let arrLen = this.keyMap[hashedKey].length;
        for (let i=0; i<arrLen; i++) {
            if (arr[i][0]===key) {
                return arr[i];
            }
        }
        return null;
    }
}

var ht = new HashTable();
console.log(ht.set('pink', 'hexcodeforpink'));
console.log(ht.set('cyan', 'hexcodeforcyan'));
console.log(ht.set('white', 'hexcodeforwhite'));
console.log(ht.set('slateblue', 'hexcodeforslateblue'));
console.log(ht.set('orangered', 'hexcodefororangered'));
console.log(ht.set('salmon', 'hexcodeforsalmon'));
console.log(ht.keyMap);
console.log(ht.get('cyan'));
console.log(ht.get('salmon'));