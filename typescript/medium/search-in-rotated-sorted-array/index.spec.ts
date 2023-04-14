import { search } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = search([4, 5, 6, 7, 0, 1, 2], 0);
    const expected = 4;
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const output = search([4, 5, 6, 7, 0, 1, 2], 3);
    const expected = -1;
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const output = search([1], 0);
    const expected = -1;
    expect(output).toEqual(expected);
  });
});
