function solution(s) {
  const sArr = s.split(' ');
  sArr.forEach((string, idx) => (sArr[idx] = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()));
  return sArr.join(' ');
}

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
console.log(solution('for the last  week'));
