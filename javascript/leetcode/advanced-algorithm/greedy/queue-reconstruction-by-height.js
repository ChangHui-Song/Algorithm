/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const sortedPeople = people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  const result = [];

  for (let i = 0; i < sortedPeople.length; i++) {
    result.splice(sortedPeople[i][1], 0, sortedPeople[i]);
  }
  return result;
};

console.log(
  reconstructQueue([
    [6, 0],
    [5, 0],
    [4, 0],
    [3, 2],
    [2, 2],
    [1, 4],
  ])
);
