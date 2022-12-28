/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const used = {};
  let start = 0;
  let maxLength = 0;

  [...s].forEach((char, index) => {
    if (used[char] !== undefined && start <= used[char]) start = used[char] + 1;
    else maxLength = Math.max(maxLength, index - start + 1);
    used[char] = index;
  });
  return maxLength;
};
