import { maxSlidingWindow } from '.';

describe('239. Sliding Window Maximum', () => {
  test('example test 1', () => {
    const output = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
    const expected = [3, 3, 5, 5, 6, 7];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = maxSlidingWindow([1], 1);
    const expected = [1];
    expect(output).toEqual(expected);
  });
});
