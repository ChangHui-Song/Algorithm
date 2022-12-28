function solution(distance, scope, times) {
  let answer = distance;

  times.forEach((time, index) => {
    const [minScope, maxScope] = scope[index].sort((a, b) => a - b);
    for (let i = minScope; i < maxScope + 1; i++) {
      const relation = i % (time[0] + time[1]);
      if (0 < relation && relation <= time[0]) {
        answer = answer > i ? i : answer;
      }
    }
  });
  return answer;
}

console.log(
  solution(
    10,
    [
      [3, 4],
      [5, 8],
    ],
    [
      [2, 5],
      [4, 3],
    ]
  )
);
console.log(
  solution(
    12,
    [
      [7, 8],
      [4, 6],
      [11, 10],
    ],
    [
      [2, 2],
      [2, 4],
      [3, 3],
    ]
  )
);
