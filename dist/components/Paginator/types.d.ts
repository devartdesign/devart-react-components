export declare enum LinkType {
    BUTTON = 0,
    LINK = 1
}
export interface IPaginatorQuery {
    currentPage: number;
    pageLimit: number;
    search: string;
    filters: string[];
}
export interface IPaginatorProps {
    totalRecords: number;
    pageLimit?: number;
    pageNeighbours?: number;
    linkType?: LinkType;
    filterOptions?: string[];
    hideColumnOptions?: string[];
    enableToolkit?: boolean;
    hidePaginationLimiter?: boolean;
    disableFilter?: boolean;
    disableHideColumns?: boolean;
    disableSearch?: boolean;
    handleChange: (query: IPaginatorQuery) => void;
}
export interface IPaginatorState {
    query?: IPaginatorQuery;
}
