function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let cur = [];
    for (let j = 0; j < arr1[0].length; j++) {
      cur.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(cur);
  }
  return answer;
}

function bestSolution(arr1, arr2) {
  return arr1.map((arr, arrIdx) => arr.map((num, numIdx) => num + arr2[arrIdx][numIdx]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

console.log(
  bestSolution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
