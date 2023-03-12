import { describe, expect, test } from '@jest/globals';
import { reverseString } from '.';

describe('Compare Reverse String', () => {
  test('hello', () => {
    const s: string[] = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  test('Hannah', () => {
    const s: string[] = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(s);
    expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
