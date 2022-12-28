/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let minPrices = prices[0];

  for (let i = 0; i < prices.length - 1; i++) {
    if (minPrices > prices[i]) minPrices = prices[i];
    profit = Math.max(profit, prices[i] - minPrices);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
