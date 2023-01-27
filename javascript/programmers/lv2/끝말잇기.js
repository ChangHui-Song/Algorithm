function solution(n, words) {
  const wordstack = [words[0]];
  if (words[0].length === 1) return [1, 1];

  for (let i = 1; i < words.length; i++) {
    if (wordstack.includes(words[i])) return [(i % n) + 1, Math.floor(i / n) + 1];
    if (wordstack.at(-1).slice(-1) !== words[i].slice(0, 1) || words.length === 1) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    wordstack.push(words[i]);
  }
  return [0, 0];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
