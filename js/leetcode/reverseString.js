/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  // let left = 0;
  // let right = s.length - 1;

  // while (left <= right) {
  //   let tmp = s[left];
  //   s[left] = s[right];
  //   s[right] = tmp;
  //   left++;
  //   right--;
  // }
  s = s.reverse();
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
