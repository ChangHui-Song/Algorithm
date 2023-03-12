export function maxProfit(prices: number[]): number {
  let answer = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    answer = Math.max(answer, prices[i] - minPrice);
  }

  return answer;
}
