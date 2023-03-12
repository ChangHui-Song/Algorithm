import { describe, expect, test } from '@jest/globals';
import { groupAnagrams } from '.';

describe(' description', () => {
  test('example test case', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = groupAnagrams(input);
    const expectedOutput = [
      expect.arrayContaining(['eat', 'tea', 'ate']),
      expect.arrayContaining(['tan', 'nat']),
      expect.arrayContaining(['bat']),
    ];
    expect(output).toEqual(expect.arrayContaining(expectedOutput));
  });

  test('none input test', () => {
    const result = groupAnagrams(['']);
    expect(result).toEqual([['']]);
  });

  test('one input test', () => {
    const result = groupAnagrams(['a']);
    expect(result).toEqual([['a']]);
  });
});
