function solution(s) {
  const numberArr = s.split(' ');
  return String(Math.min(...numberArr) + ' ' + String(Math.max(...numberArr)));
}

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
