/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const taskCounter = {};

  for (let i = 0; i < tasks.length; i++) {
    if (!taskCounter[tasks[i]]) taskCounter[tasks[i]] = 0;
    taskCounter[tasks[i]]++;
  }

  const sortedTasks = Object.values(taskCounter).sort((a, b) => b - a);
  let idleUnit = (sortedTasks[0] - 1) * n;
  console.log(sortedTasks);

  for (let i = 1; i < sortedTasks.length; i++) {
    if (sortedTasks[i] < sortedTasks[0]) {
      idleUnit -= sortedTasks[i];
    } else {
      idleUnit -= sortedTasks[i] - 1;
    }
  }
  console.log(tasks.length, idleUnit);
  return tasks.length + (idleUnit > 0 ? idleUnit : 0);
};
