function solution(s) {
  let halfsLen = Math.floor(s.length / 2);
  return s.length % 2 ? s.slice(halfsLen, halfsLen + 1) : s.slice(halfsLen - 1, halfsLen + 1);
}

function bestSolution(s) {
  let halfsLen = Math.floor(s.length / 2);
  return s.length % 2 ? s[halfsLen] : s[halfsLen - 1] + s[halfsLen];
}

console.log(bestSolution('a'));
console.log(bestSolution('abcde'));
console.log(bestSolution('qwer'));
