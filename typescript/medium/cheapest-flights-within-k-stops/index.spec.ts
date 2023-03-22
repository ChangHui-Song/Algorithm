import { findCheapestPrice } from '.';

describe('787. Cheapest Flights Within K Stops', () => {
  test('example test 1', () => {
    const output = findCheapestPrice(
      4,
      [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
      ],
      0,
      3,
      1
    );
    const expected = 700;
    expect(output).toBe(expected);
  });
  test('example test 2', () => {
    const output = findCheapestPrice(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      1
    );
    const expected = 200;
    expect(output).toBe(expected);
  });
  test('example test 3', () => {
    const output = findCheapestPrice(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      0
    );
    const expected = 500;
    expect(output).toBe(expected);
  });
});
