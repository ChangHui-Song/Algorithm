import { convertArrayToTree } from '../../utils';
import { maxDepth } from '.';

describe('104. Maximum Depth of Binary Tree', () => {
  // test('example test 1', () => {
  //   const input = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
  //   const output = maxDepth(input);
  //   const expected = 3;
  //   expect(output).toBe(expected);
  // });

  // test('example test 2', () => {
  //   const input = convertArrayToTree([1, null, 2]);
  //   const output = maxDepth(input);
  //   const expected = 2;
  //   expect(output).toBe(expected);
  // });

  test('example test 3', () => {
    const input = convertArrayToTree([
      0,
      2,
      4,
      1,
      null,
      3,
      -1,
      5,
      1,
      null,
      6,
      null,
      8,
    ]);
    const output = maxDepth(input);
    const expected = 4;
    expect(output).toBe(expected);
  });
});
