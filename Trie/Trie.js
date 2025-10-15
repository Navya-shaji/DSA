class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    charCode(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            let index = this.charCode(char);
            if (node.children[index] === null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.endOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            let index = this.charCode(char);
            if (node.children[index] === null) {
                return false;
            }
            node = node.children[index];
        }
        return node.endOfWord;
    }

    DFS(node, word, result) {
        if (node.endOfWord) {
            result.push(word);
        }
        for (let i = 0; i < 26; i++) {
            if (node.children[i]) {
                const char = String.fromCharCode(i + 'a'.charCodeAt(0));
                this.DFS(node.children[i], word + char, result);
            }
        }
        return result;
    }

    AutoCompletion(prefix) {
        let node = this.root;
        const result = [];
        for (const char of prefix) {
            const index = this.charCode(char);
            if (!node.children[index]) return result; // prefix not found
            node = node.children[index];
        }
        this.DFS(node, prefix, result);
        return result;
    }

    longestCommonPrefix() {
        let prefix = "";
        let node = this.root;

        while (true) {
            let count = 0;
            let nextNode = null;
            let char = '';

            for (let i = 0; i < 26; i++) {
                if (node.children[i] !== null) {
                    count++;
                    nextNode = node.children[i];
                    char = String.fromCharCode(i + 'a'.charCodeAt(0));
                }
            }

            if (count !== 1 || node.endOfWord) {
                break;
            }

            prefix += char;
            node = nextNode;
        }

        return prefix;
    }
}

// Example usage
const trie = new Trie();
trie.insert('apple');
trie.insert('apps');
trie.insert('apex');


console.log("AutoCompletion for 'a':", trie.AutoCompletion('a'));    // ['apple', 'apps', 'apex']
console.log("AutoCompletion for 'ap':", trie.AutoCompletion('ap'));  // ['apple', 'apps', 'apex']
console.log("AutoCompletion for 'bat':", trie.AutoCompletion('bat')); // ['bat']
console.log("AutoCompletion for 'c':", trie.AutoCompletion('c'));    // []

console.log("Longest Common Prefix:", trie.longestCommonPrefix());   // 'a'