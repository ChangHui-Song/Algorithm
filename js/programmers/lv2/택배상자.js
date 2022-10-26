function solution(order) {
  let answer = 0;
  let cur = 0;
  const mainBelt = Array.from(new Array(order.length), (v, i) => order.length - i);
  const subelt = [];

  while (cur < order.length) {
    if (order[cur] === mainBelt[mainBelt.length - 1]) {
      mainBelt.pop();
      cur++;
      answer++;
    } else if (subelt && subelt[subelt.length - 1] === order[cur]) {
      subelt.pop();
      cur++;
      answer++;
    } else if (order[cur] < order.length - mainBelt.length && subelt[subelt.length - 1] !== order[cur]) {
      break;
    } else {
      subelt.push(mainBelt.pop());
    }
  }

  return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
