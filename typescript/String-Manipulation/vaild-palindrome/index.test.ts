import { describe, expect, test } from '@jest/globals';
import { isPalindrome } from '.';

describe('Valid Palindrome', () => {
  test('Palindrome Module', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome(' ')).toBe(true);
  });
});
