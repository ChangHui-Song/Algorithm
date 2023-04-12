import { kClosest } from '.';

describe('973. K Closest Points to Origin', () => {
  test('example test 1', () => {
    const output = kClosest(
      [
        [1, 3],
        [-2, 2],
      ],
      1
    );
    const expected = [[-2, 2]];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = kClosest(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2
    );
    const expected = [
      [3, 3],
      [-2, 4],
    ];
    expect(output).toEqual(expected);
  });
});
