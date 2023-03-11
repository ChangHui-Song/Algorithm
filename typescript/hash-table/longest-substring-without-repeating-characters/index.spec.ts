import { lengthOfLongestSubstring } from '.';

describe('3. Longest Substring Without Repeating Characters', () => {
  test('example test 1', () => {
    const input = 'abcabcbb';
    const output = lengthOfLongestSubstring(input);
    const expected = 3;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const input = 'bbbbb';
    const output = lengthOfLongestSubstring(input);
    const expected = 1;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const input = 'pwwkew';
    const output = lengthOfLongestSubstring(input);
    const expected = 3;
    expect(output).toBe(expected);
  });
});
