import { hammingDistance } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = hammingDistance(1, 4);
    const expected = 2;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = hammingDistance(3, 1);
    const expected = 1;
    expect(output).toEqual(expected);
  });
});
