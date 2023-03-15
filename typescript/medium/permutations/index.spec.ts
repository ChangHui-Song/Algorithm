import { permute } from '.';

describe('46. Permutations', () => {
  test('example test 1', () => {
    const output = permute([1, 2, 3]);
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    expect(output).toEqual(expect.arrayContaining(expected));
  });
  test('example test 2', () => {
    const output = permute([0, 1]);
    const expected = [
      [0, 1],
      [1, 0],
    ];
    expect(output).toEqual(expect.arrayContaining(expected));
  });
  test('example test 3', () => {
    const output = permute([1]);
    const expected = [[1]];
    expect(output).toEqual(expected);
  });
});
