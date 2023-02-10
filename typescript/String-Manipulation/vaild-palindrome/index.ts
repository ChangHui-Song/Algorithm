export function isPalindrome(s: string): boolean {
  const lowerString = s.toLowerCase();
  const newString = lowerString.replace(/[^0-9|a-z]/gi, '');

  for (let i = 0; i < Math.floor(newString.length / 2); i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) return false;
  }
  return true;
}
