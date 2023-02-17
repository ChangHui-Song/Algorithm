import { describe, expect, test } from '@jest/globals';
import { trap } from '.';

describe(' description', () => {
  test(' test example 1', () => {
    const output = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    const expected = 6;
    expect(output).toEqual(6);
  });

  test(' test example 2', () => {
    const output = trap([4, 2, 0, 3, 2, 5]);
    const expected = 9;
    expect(output).toEqual(9);
  });
});
