import { convertArrayToTree } from '../../utils';
import { bstToGst } from '.';

describe('1038. Binary Search Tree to Greater Sum Tree', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([
      4,
      1,
      6,
      0,
      2,
      5,
      7,
      null,
      null,
      null,
      3,
      null,
      null,
      null,
      8,
    ]);
    const output = bstToGst(input);
    const expected = convertArrayToTree([
      30,
      36,
      21,
      36,
      35,
      26,
      15,
      null,
      null,
      null,
      33,
      null,
      null,
      null,
      8,
    ]);
    expect(output).toEqual(expected);
  });
  test('example test 2', () => {
    const input = convertArrayToTree([0, null, 1]);
    const output = bstToGst(input);
    const expected = convertArrayToTree([1, null, 1]);
    expect(output).toEqual(expected);
  });
});
