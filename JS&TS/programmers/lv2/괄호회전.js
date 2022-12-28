const bracketPair = {
  '(': ')',
  '{': '}',
  '[': ']',
};

function compareBracket(brackets) {
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (bracketPair[brackets[i]]) {
      stack.push(brackets[i]);
    } else if (stack.length && bracketPair[stack[stack.length - 1]] === brackets[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length) return false;
  return true;
}

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (compareBracket(s)) answer++;
    s = s.slice(-1) + s.slice(0, -1);
  }
  return answer;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
console.log(solution('{'));
