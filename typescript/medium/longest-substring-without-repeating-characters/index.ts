export function lengthOfLongestSubstring(s: string): number {
  const used = new Map<string, number>();
  let left = 0;
  let answer = 0;

  for (let right = 0; right < s.length; right++) {
    used.set(s[right], used.get(s[right]) + 1 || 1);

    while (used.get(s[right]) > 1) {
      const start = s[left];
      used.set(start, used.get(start) - 1);
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}
