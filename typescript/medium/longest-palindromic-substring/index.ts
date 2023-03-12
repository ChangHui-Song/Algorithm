function isPalindrome(s: string): boolean {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}

export function longestPalindrome(s: string): string {
  const expand = (left: number, right: number): string => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    return s.slice(left + 1, right);
  };

  let answer = '';

  if (s.length < 2 || isPalindrome(s)) return s;

  for (let i = 0; i < s.length - 1; i++) {
    answer = [answer, expand(i, i + 1), expand(i, i + 2)].sort(
      (a, b) => b.length - a.length
    )[0];
  }

  return answer;
}
