function solution(X, Y) {
  let answer = '';
  const xCountArr = new Array(10).fill(0);
  const yCountArr = new Array(10).fill(0);

  for (let i = 0; i < X.length; i++) {
    xCountArr[parseInt(X[i])] += 1;
  }

  for (let i = 0; i < Y.length; i++) {
    yCountArr[parseInt(Y[i])] += 1;
  }

  for (let i = 9; i >= 0; i--) {
    answer += String(i).repeat(xCountArr[i] < yCountArr[i] ? xCountArr[i] : yCountArr[i]);
  }
  if (answer.length && answer.length === (xCountArr[0] < yCountArr[0] ? xCountArr[0] : yCountArr[0])) {
    answer = '0';
  }
  return answer.length ? answer : '-1';
}

console.log(solution('2345', '100'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
