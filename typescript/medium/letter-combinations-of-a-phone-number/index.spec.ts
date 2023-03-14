import { letterCombinations } from '.';

describe('17. Letter Combinations of a Phone Number', () => {
  test('example test 1', () => {
    const output = letterCombinations('23');
    const expected = expect.arrayContaining([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
    expect(output).toEqual(expected);
  });
  test('example test 2', () => {
    const output = letterCombinations('');
    const expected = [];
    expect(output).toEqual(expected);
  });
  test('example test 3', () => {
    const output = letterCombinations('2');
    const expected = expect.arrayContaining(['a', 'b', 'c']);
    expect(output).toEqual(expected);
  });
});
