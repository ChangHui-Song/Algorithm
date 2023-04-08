import { convertArrayToList } from '../../utils';
import { insertionSortList } from '.';

describe('147. Insertion Sort List', () => {
  test('example test 1', () => {
    const input = convertArrayToList([4, 2, 1, 3]);
    const output = insertionSortList(input);
    const expected = convertArrayToList([1, 2, 3, 4]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToList([-1, 5, 3, 4, 0]);
    const output = insertionSortList(input);
    const expected = convertArrayToList([-1, 0, 3, 4, 5]);
    expect(output).toEqual(expected);
  });
});
