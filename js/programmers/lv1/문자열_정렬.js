function solution(strings, n) {
  strings.sort((left, right) => {
    if (left[n] > right[n]) return 1;
    if (left[n] < right[n]) return -1;
    if (left[n] === right[n]) {
      if (left > right) return 1;
      if (left < right) return -1;
      return 0;
    }
  });
  return strings;
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abca', 'abcd', 'cdx'], 2));
