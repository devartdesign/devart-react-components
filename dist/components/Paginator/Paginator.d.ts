import React from 'react';
import { LinkType, IPaginatorQuery } from './types';
export interface IPaginationState {
    currentPage: number;
    lastPage: number;
    totalPages: number;
    pageLimit: number;
    totalRecords: number;
    pageNeighbours: number;
}
export interface IPaginationProps {
    page: number;
    totalRecords: number;
    pageLimit: number;
    pageNeighbours: number;
    hidePaginationLimiter?: boolean;
    linkType?: LinkType;
    onPageChanged: (paginationData: IPaginatorQuery) => void;
}
declare const _default: React.MemoExoticComponent<({ page, pageLimit, pageNeighbours, totalRecords, hidePaginationLimiter, linkType, onPageChanged, children }: React.PropsWithChildren<IPaginationProps>) => JSX.Element>;
export default _default;
