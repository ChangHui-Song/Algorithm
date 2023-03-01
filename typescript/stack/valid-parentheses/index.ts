export function isValid(s: string): boolean {
  const stack = [];
  const table = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  for (let char of s) {
    if (!table[char]) {
      stack.push(char);
    } else if (!stack || table[char] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
