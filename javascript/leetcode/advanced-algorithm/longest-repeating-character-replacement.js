/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const frequently = {};
  let left = 0;
  let maxCount = 0;
  let mostFrequently = 0;

  for (let right = 0; right < s.length; right++) {
    if (!frequently[s[right]]) frequently[s[right]] = 0;
    frequently[s[right]]++;

    let currentLength = right + 1 - left;
    mostFrequently = Math.max(mostFrequently, frequently[s[right]]);

    while (currentLength - mostFrequently > k) {
      frequently[s[left]]--;
      currentLength--;
      left++;
    }
    maxCount = Math.max(currentLength, maxCount);
  }

  return maxCount;
};
