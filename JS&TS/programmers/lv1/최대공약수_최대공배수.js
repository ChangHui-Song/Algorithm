function solution(n, m) {
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);

  while (minNum !== 0) {
    let gcd = maxNum % minNum;
    maxNum = minNum;
    minNum = gcd;
  }
  return [maxNum, (n * m) / maxNum];
}

console.log(solution(3, 12));
