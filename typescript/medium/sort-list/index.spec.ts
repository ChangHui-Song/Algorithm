import { convertArrayToList } from '../../utils';
import { sortList } from '.';

describe('148. Sort List', () => {
  test('example test 1', () => {
    const input = convertArrayToList([4, 2, 1, 3]);
    const output = sortList(input);
    const expected = convertArrayToList([1, 2, 3, 4]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToList([-1, 5, 3, 4, 0]);
    const output = sortList(input);
    const expected = convertArrayToList([-1, 0, 3, 4, 5]);
    expect(output).toEqual(expected);
  });
});
