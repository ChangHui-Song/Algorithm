import { networkDelayTime } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = networkDelayTime(
      [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
      ],
      4,
      2
    );
    const expected = 2;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const output = networkDelayTime([[1, 2, 1]], 2, 1);
    const expected = 1;
    expect(output).toBe(expected);
  });

  test('example test 3', () => {
    const output = networkDelayTime([[1, 2, 1]], 2, 2);
    const expected = -1;
    expect(output).toBe(expected);
  });
});
