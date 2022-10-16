function eratos(n) {
  if (n < 2) return 0;

  let primeCount = 0;
  const primeArray = new Array(n + 1);

  primeArray.fill(true, 0, primeArray.length);
  for (let i = 2; i < n + 1; i++) {
    if (primeArray[i]) {
      primeCount++;
      for (let j = i * i; j < n + 1; j += i) primeArray[j] = false;
    }
  }
  return primeCount;
}

function solution(n) {
  return eratos(n);
}

console.log(solution(10));
