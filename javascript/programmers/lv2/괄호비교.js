function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else if (s[i] === ')') {
      if (!stack.length) return false;
      stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
}

function bestSolution(s) {
  let count = 0;
  for (let paren of s) {
    count += paren === '(' ? 1 : -1;
    if (count < 0) return false;
  }
  return !count ? true : false;
}

console.log(bestSolution('()()'));
console.log(bestSolution('(())()'));
console.log(bestSolution(')()('));
console.log(bestSolution('(()('));
