import { topKFrequent } from '.';

describe('347. Top K Frequent Elements', () => {
  test('example test 1', () => {
    const output = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    const expected = [1, 2];
    expect(output).toEqual(expected);
  });
  test('example test 2', () => {
    const output = topKFrequent([1], 1);
    const expected = [1];
    expect(output).toEqual(expected);
  });
});
