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
    constructor(size=53) { // uses a prime number as default size
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
        return this;
    }

    set2(key, value) { // if key already exists, update value
        let hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [[key, value]];
        } else {
            let checkDupe = this.get(key);
            if (checkDupe) {
                for (let i=0; i<this.keyMap[hashedKey].length; i++) {
                    if (this.keyMap[hashedKey][i][0]===key) {
                        this.keyMap[hashedKey][i][1] = value;
                        break;
                    }
                }
            } else {
                this.keyMap[hashedKey].push([key, value]);
            }
        }
        return;
    }

    get(key) {
        let hashedKey = this._hash(key);
        let arr = this.keyMap[hashedKey];
        if (!arr) return null;
        let arrLen = this.keyMap[hashedKey].length;
        for (let i=0; i<arrLen; i++) {
            if (arr[i][0]===key) {
                return arr[i][1];
            }
        }
        return null;
    }

    keys() {
        let keysArr = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1]);
                }
            }   
        }
        return valuesArr;
    }

    valuesUnique() {
        let valuesArr = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

var ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
console.log(ht.keyMap);
ht.set2('salmon', '#new value for salmon');
ht.set2('purple', '#DDA0DD');
ht.set2('violet', '#DDA0DD');
console.log(ht.keyMap);
console.log(ht.get('cyan'));
console.log(ht.get('yellow'));
console.log(ht.get('maroon'));
console.log(ht.get('salmon'));
console.log(ht.keys());
console.log(ht.values());
console.log(ht.valuesUnique());