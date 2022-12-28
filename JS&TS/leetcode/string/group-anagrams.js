/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const anangrams = {};

  strs.forEach((str) => {
    const key = str.split('').sort().join('');
    if (!anangrams[key]) anangrams[key] = [str];
    else anangrams[key].push(str);
  });
  return Object.values(anangrams);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
