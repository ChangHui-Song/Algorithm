import { numJewelsInStones } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const jewels = 'aA';
    const stones = 'aAAbbbb';
    const output = numJewelsInStones(jewels, stones);
    const expected = 3;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const jewels = 'z';
    const stones = 'ZZZ';
    const output = numJewelsInStones(jewels, stones);
    const expected = 0;
    expect(output).toBe(expected);
  });
});
