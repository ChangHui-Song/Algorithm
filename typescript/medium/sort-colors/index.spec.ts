import { sortColors } from '.';

describe('75. Sort Colors', () => {
  test('example test 1', () => {
    const input = [2, 0, 2, 1, 1, 0];
    sortColors(input);
    const expected = [0, 0, 1, 1, 2, 2];
    expect(input).toEqual(expected);
  });

  test('example test 2', () => {
    const input = [2, 0, 1];
    sortColors(input);
    const expected = [0, 1, 2];
    expect(input).toEqual(expected);
  });
});
