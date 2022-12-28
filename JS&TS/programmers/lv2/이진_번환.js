function solution(s) {
  let strArr = [...s];
  let zeroCount = 0;
  let transCount = 0;

  while (strArr.length !== 1) {
    const subArr = strArr.filter((v) => v === '1');
    zeroCount += strArr.length - subArr.length;
    strArr = [...subArr.length.toString(2)];
    transCount += 1;
  }
  return [transCount, zeroCount];
}

function bestSolution(s) {
  const answer = [0, 0];

  while (s.length > 1) {
    answer[0] += 1;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
