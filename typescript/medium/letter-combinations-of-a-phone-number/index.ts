export function letterCombinations(digits: string): string[] {
  const dfs = (index: number, path: string): void => {
    if (digits.length === path.length) {
      answer.push(path);
      return;
    }

    for (let letter of phone[digits[index]]) {
      dfs(index + 1, path + letter);
    }
  };

  const answer: string[] = [];
  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  if (!digits) return [];
  dfs(0, '');
  return answer;
}
