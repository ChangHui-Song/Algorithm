function solution(n) {
  let nextN = n + 1;
  const one = n
    .toString(2)
    .split('')
    .filter((n) => n === '1').length;
  while (
    nextN
      .toString(2)
      .split('')
      .filter((n) => n === '1').length !== one
  )
    nextN++;
  return nextN;
}

console.log(solution(78));
console.log(solution(15));
