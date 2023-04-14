import { search } from '.';

describe('704. Binary Search', () => {
  test('example test 1', () => {
    const output = search([-1, 0, 3, 5, 9, 12], 9);
    const expected = 4;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = search([-1, 0, 3, 5, 9, 12], 2);
    const expected = -1;
    expect(output).toEqual(expected);
  });
});
