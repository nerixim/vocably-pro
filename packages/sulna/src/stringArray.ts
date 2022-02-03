export const join = (lines: string[]): string => {
  if (lines.length === 0) {
    return '';
  }

  if (lines.length === 1) {
    return lines[0];
  }

  return lines.map((line) => `* ${line}`).join(`\n`);
};

export const explode = (lines: string): string[] => {
  return lines
    .split(`\n`)
    .map((line) => line.replace(/^\* */, '').replace(/ +$/, ''))
    .filter((line) => line !== '');
};
