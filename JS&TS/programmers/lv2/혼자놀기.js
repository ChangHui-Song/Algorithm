function solution(cards) {
  let answer = 0;
  for (let i = 0; i < cards.length; i++) {
    const visited = new Array(cards.length).fill(false);
    let cur = i;
    let first = 0;

    while (!visited[cur]) {
      visited[cur] = true;
      cur = cards[cur] - 1;
      first++;
    }
    for (let j = 0; j < cards.length; j++) {
      let second = 0;

      cur = j;
      while (!visited[cur]) {
        visited[cur] = true;
        cur = cards[cur] - 1;
        second++;
      }
      answer = answer < first * second ? first * second : answer;
    }
  }
  return answer;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
