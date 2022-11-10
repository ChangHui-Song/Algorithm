/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  if (s.length < 2 && s === [...s].reverse().join('')) return s;

  let result = '';
  for (let i = 0; i < s.length - 1; i++) {
    result = [result, expand(i, i + 1), expand(i, i + 2)].sort(
      (a, b) => b.length - a.length
    )[0];
  }
  return result;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
