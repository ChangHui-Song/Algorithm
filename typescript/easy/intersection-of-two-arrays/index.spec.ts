import { intersection } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = intersection([1, 2, 2, 1], [2, 2]);
    const expected = [2];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
    const expected = expect.arrayContaining([4, 9]);
    expect(output).toEqual(expected);
  });
});
