/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const table = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (table[s[i]]) {
      stack.push(s[i]);
    } else if (!stack || table[stack.pop()] !== s[i]) {
      return false;
    }
  }
  if (stack.length) return false;
  return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
