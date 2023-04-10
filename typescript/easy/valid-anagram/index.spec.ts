import { isAnagram } from '.';

describe('242. Valid Anagram', () => {
  test('example test 1', () => {
    const output = isAnagram('anagram', 'nagaram');
    const expected = true;
    expect(output).toEqual(expected);
  });
  test('example test 1', () => {
    const output = isAnagram('rat', 'car');
    const expected = false;
    expect(output).toEqual(expected);
  });
});
