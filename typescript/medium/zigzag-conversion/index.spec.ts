import { convert } from '.';

describe('6. Zigzag Conversion', () => {
  test('example test 1', () => {
    const output = convert('PAYPALISHIRING', 3);
    const expected = 'PAHNAPLSIIGYIR';
    expect(output).toEqual(expected);
  });
  test('example test 2', () => {
    const output = convert('PAYPALISHIRING', 4);
    const expected = 'PINALSIGYAHRPI';
    expect(output).toEqual(expected);
  });
  test('example test 3', () => {
    const output = convert('A', 1);
    const expected = 'A';
    expect(output).toEqual(expected);
  });
});
