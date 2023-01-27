/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const merged = [];

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of sortedIntervals) {
    if (merged.length && interval[0] <= merged.at(-1)[1]) {
      merged.at(-1)[1] = Math.max(interval[1], merged.at(-1)[1]);
    } else {
      merged.push(interval);
    }
  }
  return merged;
};
