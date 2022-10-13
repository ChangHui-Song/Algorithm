function solution(s, n) {
  const answer = [...s]
    .map((letter) => {
      if (letter === ' ') {
        return letter;
      }
      return letter === letter.toUpperCase()
        ? String.fromCharCode(((letter.charCodeAt() - 65 + n) % 26) + 65)
        : String.fromCharCode(((letter.charCodeAt() - 97 + n) % 26) + 97);
    })
    .join('');
  return answer;
}
