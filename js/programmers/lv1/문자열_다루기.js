function solution(s) {
  if (s.includes('e')) return false;
  return isNaN(Number(s)) || (s.length !== 4 && s.length !== 6) ? false : true;
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('12e3'));
console.log(solution(''));
