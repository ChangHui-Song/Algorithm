function solution(s) {
  const obj = {};
  let current = '';

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) >= 0) {
      current += s[i];
      continue;
    }
    if (current.length) {
      if (obj[current]) obj[current]++;
      else obj[current] = 1;
      current = '';
    }
  }
  const objKeys = Object.keys(obj);
  const answer = new Array(objKeys.length);
  objKeys.forEach((n) => {
    answer[objKeys.length - obj[n]] = Number(n);
  });
  return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{123}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
