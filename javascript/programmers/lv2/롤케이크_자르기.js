function solution(topping) {
  let answer = 0;
  const toppingObj = {};
  topping.forEach((v) => {
    if (!toppingObj[v]) toppingObj[v] = [false, 1];
    else toppingObj[v][1]++;
  });
  let left = 0;
  let right = Object.keys(toppingObj).length;

  topping.forEach((v) => {
    if (!toppingObj[v][0]) {
      toppingObj[v][0] = true;
      left++;
    }
    toppingObj[v][1]--;
    if (!toppingObj[v][1]) right--;
    if (left === right) answer++;
  });
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
