class TrieNode {
  constructor() {
    this.word = false;
    this.children = {};
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let char of word) {
    if (!Object.keys(node.children).includes(char)) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (let char of word) {
    if (!Object.keys(node.children).includes(char)) {
      return false;
    }
    node = node.children[char];
  }
  return node.word;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (let char of prefix) {
    if (!Object.keys(node.children).includes(char)) {
      return false;
    }
    node = node.children[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
