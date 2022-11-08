/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const sLower = s.toLowerCase();
  const strs = sLower.replace(/[^a-z|0-9]/gi, '');
  console.log(strs);
  for (let i = 0; i < Math.floor(strs.length / 2); i++) {
    if (strs[i] !== strs[strs.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
