import { convertArrayToTree } from '../../utils';
import { diameterOfBinaryTree } from '.';

describe('543. Diameter of Binary Tree', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([1, 2, 3, 4, 5]);
    const output = diameterOfBinaryTree(input);
    const expected = 3;
    expect(output).toBe(expected);
  });

  test('example test 1', () => {
    const input = convertArrayToTree([1, 2]);
    const output = diameterOfBinaryTree(input);
    const expected = 1;
    expect(output).toBe(expected);
  });
});
