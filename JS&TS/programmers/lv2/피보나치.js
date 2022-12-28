function solution(n) {
  const fiboArr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
  }
  return fiboArr[fiboArr.length - 1];
}

function bestSolution(n) {
  let n1 = 0;
  let n2 = 1;
  let cur = 0;

  for (let i = 2; i < n + 1; i++) {
    cur = n1 + n2;
    n1 = n2;
    n2 = cur;
  }
  return cur % 1234567;
}

console.log(bestSolution(3));
console.log(bestSolution(5));
