export function leastInterval(tasks: string[], n: number): number {
  const taskCounter = new Map<string, number>();

  for (let i = 0; i < tasks.length; i++) {
    taskCounter.set(tasks[i], (taskCounter.get(tasks[i]) ?? 0) + 1);
  }

  const sortedTasksCounts = Array.from(taskCounter.values()).sort(
    (a, b) => b - a
  );
  let idleUnit = (sortedTasksCounts[0] - 1) * n;

  for (let i = 1; i < sortedTasksCounts.length; i++) {
    if (sortedTasksCounts[i] < sortedTasksCounts[0]) {
      idleUnit -= sortedTasksCounts[i];
    } else {
      idleUnit -= sortedTasksCounts[i] - 1;
    }
  }

  return tasks.length + (idleUnit > 0 ? idleUnit : 0);
}
