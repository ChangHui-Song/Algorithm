// 하샤드의 수 판별
// 하샤드의 수 : 본래 숫자를 각 자리를 더한 수로 나누어 떨어지는 수
function solution(x) {
  let copyx = x;
  let current = 0;

  while (copyx > 0) {
    current += copyx % 10;
    copyx = Math.floor(copyx / 10);
  }
  return x % current ? false : true;
}

console.log(solution(19));
