function solution(n) {
  const arr = String(n)
    .split('')
    .sort((a, b) => b - a);
  return parseInt(arr.join(''));
}

console.log(solution(118372));
