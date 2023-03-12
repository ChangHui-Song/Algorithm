import { numIslands } from '.';

describe('200. Number of Islands', () => {
  test('example test 1', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    const output = numIslands(grid);
    const expected = 1;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    const output = numIslands(grid);
    const expected = 3;
    expect(output).toBe(expected);
  });
});
