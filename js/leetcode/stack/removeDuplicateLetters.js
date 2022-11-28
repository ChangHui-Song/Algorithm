/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let counter = {};
  let seen = new Set();
  let stack = [];

  for (let char of s) {
    if (counter[char]) counter[char] += 1;
    else counter[char] = 1;
  }

  for (let char of s) {
    counter[char] -= 1;
    if (seen.has(char)) continue;
    while (
      stack.length &&
      char < stack[stack.length - 1] &&
      counter[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop());
    }
    stack.push(char);
    seen.add(char);
  }

  return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));
