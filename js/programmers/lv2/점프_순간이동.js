function solution(n) {
  return n.toString(2).match(/1/g).length;
}

function anotherSolution(n) {
  let count = 0;

  while (n > 0) {
    count += n % 2;
    n = Math.floor(n / 2);
  }
  return count;
}

console.log(anotherSolution(5));
console.log(anotherSolution(6));
console.log(anotherSolution(5000));
