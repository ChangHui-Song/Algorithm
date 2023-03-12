import { describe, expect, test } from '@jest/globals';
import { mostCommonWord } from '.';

describe(' description', () => {
  test(' test description', () => {
    const value = mostCommonWord(
      'Bob hit a ball, the hit BALL flew far after it was hit.',
      ['hit']
    );
    expect(value).toEqual('ball');
  });

  test(' test description', () => {
    const value = mostCommonWord('a.', []);
    expect(value).toEqual('a');
  });
});
