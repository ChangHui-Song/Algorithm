import { findKthLargest } from '.';

describe('215. Kth Largest Element in an Array', () => {
  test('example test 1', () => {
    const output = findKthLargest([3, 2, 1, 5, 6, 4], 2);
    const expected = 5;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = findKthLargest([3, 2, 1, 5, 6, 4], 2);
    const expected = 5;
    expect(output).toEqual(expected);
  });
});
