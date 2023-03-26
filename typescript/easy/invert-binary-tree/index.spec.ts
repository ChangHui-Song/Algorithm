import { convertArrayToTree } from '../../utils';
import { invertTree } from '.';

describe('226. Invert Binary Tree', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([4, 2, 7, 1, 3, 6, 9]);
    const output = invertTree(input);
    const expected = convertArrayToTree([4, 7, 2, 9, 6, 3, 1]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToTree([2, 1, 3]);
    const output = invertTree(input);
    const expected = convertArrayToTree([2, 3, 1]);
    expect(output).toEqual(expected);
  });
});
