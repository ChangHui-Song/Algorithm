import { expectAnyOrder } from '../../utils';
import { subsets } from '.';

describe('78. Subsets', () => {
  test('example test 1', () => {
    const output = subsets([1, 2, 3]);
    const expected = expectAnyOrder([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
    expect(output.length).toBe(expected.length);
    expect(output).toEqual(expect.arrayContaining(expected));
  });

  test('example test 2', () => {
    const output = subsets([0]);
    const expected = expectAnyOrder<number>([[], [0]]);
    expect(output.length).toBe(expected.length);
    expect(output).toEqual(expect.arrayContaining(expected));
  });
});
