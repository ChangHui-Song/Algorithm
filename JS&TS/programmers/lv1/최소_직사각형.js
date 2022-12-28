function solution(sizes) {
  let maxW = Math.max(...sizes[0]);
  let maxH = Math.min(...sizes[0]);

  for (let i = 0; i < sizes.length; i++) {
    let curW = Math.max(...sizes[i]);
    let curH = Math.min(...sizes[i]);
    if (maxW < curW) maxW = curW;
    if (maxH < curH) maxH = curH;
  }
  return maxW * maxH;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
