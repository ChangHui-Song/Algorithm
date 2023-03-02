import { removeDuplicateLetters } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = removeDuplicateLetters('bcabc');
    const expected = 'abc';
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const output = removeDuplicateLetters('cbacdcbc');
    const expected = 'acdb';
    expect(output).toBe(expected);
  });
});
