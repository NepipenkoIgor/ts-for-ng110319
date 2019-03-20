type sn = string | number;
type snb = sn | boolean;
type primitives = snb | null | undefined;

function isInArray(a: snb[], ...args: snb[]): boolean {
  return args.every((item: snb) => a.indexOf(item) !== -1);
}

function summator(...args: sn[]): number {
  return args.reduce<number>((summ: number, item: sn): number => {
    return summ + (Number(item) || 0);
  }, 0);
}

function getUnique(...args: primitives[]): primitives[] {
  return Array.from(new Set(args));
}

function toMatrix(data: primitives[], rowSize: number): primitives[][] {
  const length: number = Math.ceil(data.length / rowSize);

  return Array(length).fill(0).map((_, idx) => {
    const row = idx * rowSize;
    return data.slice(row, row + rowSize);
  });
}