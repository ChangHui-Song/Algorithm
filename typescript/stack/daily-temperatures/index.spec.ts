import { dailyTemperatures } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73];
    const output = dailyTemperatures(input);
    const expected = [1, 1, 4, 2, 1, 1, 0, 0];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = [30, 40, 50, 60];
    const output = dailyTemperatures(input);
    const expected = [1, 1, 1, 0];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = [30, 60, 90];
    const output = dailyTemperatures(input);
    const expected = [1, 1, 0];
    expect(output).toEqual(expected);
  });
});
