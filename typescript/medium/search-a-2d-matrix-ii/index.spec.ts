import { searchMatrix } from '.';

describe('240. Search a 2D Matrix II', () => {
  test('example test 1', () => {
    const output = searchMatrix(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      5
    );
    const expected = true;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = searchMatrix(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      20
    );
    const expected = false;
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = searchMatrix([[-1, 3]], 3);
    const expected = true;
    expect(output).toEqual(expected);
  });
});
