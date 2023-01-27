/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = {};
  let missing = t.length;
  let left = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < t.length; i++) {
    if (!need[t[i]]) need[t[i]] = 0;
    need[t[i]]++;
  }

  for (let right = 0; right < s.length; right++) {
    if (!need[s[right]]) need[s[right]] = 0;
    if (need[s[right]] > 0) missing--;
    need[s[right]]--;

    if (missing === 0) {
      while (left < right + 1 && need[s[left]] < 0) {
        need[s[left]]++;
        left++;
      }

      if (!end || right + 1 - left <= end - start) {
        start = left;
        end = right + 1;
        need[s[left]]++;
        missing++;
        left++;
      }
    }
  }

  return s.slice(start, end);
};

console.log(minWindow('a', 'ab'));
