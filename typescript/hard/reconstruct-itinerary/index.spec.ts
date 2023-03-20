import { findItinerary } from '.';

describe('332. Reconstruct Itinerary', () => {
  test('example test 1', () => {
    const output = findItinerary([
      ['MUC', 'LHR'],
      ['JFK', 'MUC'],
      ['SFO', 'SJC'],
      ['LHR', 'SFO'],
    ]);
    const expected = ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = findItinerary([
      ['JFK', 'SFO'],
      ['JFK', 'ATL'],
      ['SFO', 'ATL'],
      ['ATL', 'JFK'],
      ['ATL', 'SFO'],
    ]);
    const expected = ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'];
    expect(output).toEqual(expected);
  });
});
