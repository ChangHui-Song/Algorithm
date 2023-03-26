import { convertArrayToTree } from '../../utils';
import { longestUnivaluePath } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([5, 4, 5, 1, 1, null, 5]);
    const output = longestUnivaluePath(input);
    const expected = 2;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToTree([1, 4, 5, 4, 4, null, 5]);
    const output = longestUnivaluePath(input);
    const expected = 2;
    expect(output).toBe(expected);
  });
});
