export interface IPaginationRange {
  from: number;
  to: number;
  step?: number;
}

export const createPaginationRange = ({ from, to, step = 1 }: IPaginationRange) => {
  let i = from;
  const rangeNumber = [];
  while (i <= to) {
    rangeNumber.push(i);
    i += step;
  }
  return rangeNumber;
};
