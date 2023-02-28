import { reverseBetween } from '.';
import { convertArrayToList } from '../utils';

describe(' description', () => {
  test('example test 1', () => {
    const input = convertArrayToList([1, 2, 3, 4, 5]);
    const output = reverseBetween(input, 2, 4);
    const expected = convertArrayToList([1, 4, 3, 2, 5]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToList([5]);
    const output = reverseBetween(input, 1, 1);
    const expected = convertArrayToList([5]);
    expect(output).toEqual(expected);
  });
});
