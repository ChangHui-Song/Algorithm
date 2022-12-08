/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const freq = {};
  let count = 0;

  for (let s of stones) {
    if (freq[s]) freq[s] += 1;
    else freq[s] = 1;
  }

  for (let j of jewels) {
    if (freq[j]) count += freq[j];
  }
  return count;
};
