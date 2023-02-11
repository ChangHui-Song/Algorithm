export function reorderLogFiles(logs: string[]): string[] {
  const stringLog: string[] = [];
  const numberLog: string[] = [];

  for (let log of logs) {
    const isString = isNaN(Number(log.split(' ')[1]));
    if (isString) stringLog.push(log);
    else numberLog.push(log);
  }

  stringLog.sort((a: string, b: string): number => {
    let aLog = a.substring(a.indexOf(' ') + 1);
    let bLog = b.substring(b.indexOf(' ') + 1);

    if (aLog !== bLog) return aLog.localeCompare(bLog);
    return a.localeCompare(b);
  });

  return stringLog.concat(numberLog);
}
