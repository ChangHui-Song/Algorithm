export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = gas.reduce((a, b) => a + b);
  let totalCost = cost.reduce((a, b) => a + b);

  if (totalGas < totalCost) {
    return -1;
  }

  let start = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }

  return start;
}
