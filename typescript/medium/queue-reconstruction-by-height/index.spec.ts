import { reconstructQueue } from '.';

describe('406. Queue Reconstruction by Height', () => {
  test('example test 1', () => {
    const output = reconstructQueue([
      [7, 0],
      [4, 4],
      [7, 1],
      [5, 0],
      [6, 1],
      [5, 2],
    ]);
    const expected = [
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = reconstructQueue([
      [6, 0],
      [5, 0],
      [4, 0],
      [3, 2],
      [2, 2],
      [1, 4],
    ]);
    const expected = [
      [4, 0],
      [5, 0],
      [2, 2],
      [3, 2],
      [1, 4],
      [6, 0],
    ];

    expect(output).toEqual(expected);
  });
});
