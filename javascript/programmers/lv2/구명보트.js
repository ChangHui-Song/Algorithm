function solution(people, limit) {
  let answer = 0;
  let left = 0,
    right = people.length - 1;
  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      right--;
      left++;
      answer++;
    } else if (people[right]) {
      right--;
      answer++;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 50, 80, 50], 100));
