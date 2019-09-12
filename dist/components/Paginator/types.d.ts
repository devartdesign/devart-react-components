export declare enum LinkType {
    BUTTON = 0,
    LINK = 1
}
export interface IPaginatorQuery {
    page: number;
    limit: number;
    sort?: {
        by: string;
        direction: 'asc' | 'desc';
    };
}
