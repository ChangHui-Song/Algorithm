function solution(n) {
  let l = 1;
  let r = 2;
  if (n < 3) return n;

  while (n - 1) {
    let tmp = r;
    r = l + (r % 1234567);
    l = tmp % 1234567;
    n--;
  }

  return l;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
