class TrieNode {
    constructor(letter = '') {
        this.val = letter;
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let i=0; i<word.length; i++) {
            let curr = word[i];
            if (node.children.has(curr)) {
                node = node.children.get(curr);
            } else {
                let newNode = new TrieNode(curr);
                node.children.set(curr, newNode);
                node = node.children.get(curr);
            }
        }

        node.isEnd = true;
    }

    find(word) {
        let node = this.root;

        for (let i=0; i<word.length; i++) {
            let curr = word[i];
            if (node.children.has(curr)) {
                node = node.children.get(curr);
            } else {
                return false;
            }
        }

        return node.isEnd;
    }

    remove(word) {
        let node = this.root;
        let suffixes = [];
        
        // insert each character (node) into queue
        // if last character has children (i.e. other words sharing same prefixes exist) return without removing anything;
        for (let i=0; i<word.length; i++) {
            let curr = word[i];
            if (node.children.has(curr)) {
                node = node.children.get(curr);
                suffixes.push(node);
                if (i === word.length - 1 && node.children.size > 0) {
                    return 'No character (TrieNode) can be removed since they are shared by other words';
                }
            }
        }

        // start evaluating each letter (second to last char is parent, last char is child)
        // from previous for loop, last char doens't have children (otherwise would have returned before this loop)
        // remove child, check if parent is the end of another word or parent has other children, then return
        // if not, move up the suffixes array and repeat
        for (let j=suffixes.length - 2; j>=0; j--) {
            let parent = suffixes[j];
            let child = suffixes[j+1].val;
            parent.children.delete(child);
            if (parent.isEnd || parent.children.size > 0) {
                return 'Some characters removed';
            }
        }

        // at the end of previous for loop, child is removed, and if it doesn't return, that means the last parent doesn't have any other children and isn't the end of another string
        // in this case, remove the last character (last parent) as well
        // this removes the entire word from the trie
        this.root.children.delete(word[0]);
        return 'Removed all characters of the word';
    }

    printAll() {
        let node = this.root;
        let words = [];

        const traverse = (node, str) => {
            if (node.isEnd) {
                words.push(str + node.val);
            }

            if (node.children.size === 0) return;

            for (let child of node.children.keys()) {
                traverse(node.children.get(child), str + node.val);
            }
        }

        traverse(node, '');

        return words;
    }
}

let trie = new Trie();
trie.insert('strong');
trie.insert('string');
trie.insert('stringify');
trie.insert('strung');
trie.insert('stringent');
trie.insert('lies');
trie.insert('listen');
trie.insert('listed');
trie.insert('listless');
trie.insert('lists');
console.log(trie.find('string'));
console.log(trie.find('strings'));
console.log(trie.find('listened'));
console.log(trie.find('lie'));
console.log(trie.find('listen'));
console.log(trie.printAll());
console.log(trie.remove('lists'));
console.log(trie.printAll());