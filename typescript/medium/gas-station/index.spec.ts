import { canCompleteCircuit } from '.';

describe('134. Gas Station', () => {
  test('example test 1', () => {
    const output = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
    const expected = 3;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
    const expected = -1;
    expect(output).toEqual(expected);
  });
});
