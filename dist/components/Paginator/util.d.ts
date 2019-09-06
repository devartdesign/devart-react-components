export interface IPaginationRange {
    from: number;
    to: number;
    step?: number;
}
export declare const createPaginationRange: ({ from, to, step }: IPaginationRange) => any[];
