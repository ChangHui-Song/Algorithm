import { describe, expect, test } from '@jest/globals';
import { longestPalindrome } from '.';

describe(' description', () => {
  test('example test case1', () => {
    const output = longestPalindrome('babad');
    const expectedOutput = 'bab';
    expect(output).toEqual(expectedOutput);
  });

  test('example test case2', () => {
    const output = longestPalindrome('cbbd');
    const expectedOutput = 'bb';
    expect(output).toEqual(expectedOutput);
  });
});
