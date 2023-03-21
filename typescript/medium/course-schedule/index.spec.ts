import { canFinish } from '.';

describe('207. Course Schedule', () => {
  test('example test 1', () => {
    const output = canFinish(2, [[1, 0]]);
    const expected = true;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const output = canFinish(2, [
      [1, 0],
      [0, 1],
    ]);
    const expected = false;
    expect(output).toBe(expected);
  });
});
