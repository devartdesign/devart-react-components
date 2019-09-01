import React from 'react';
import { LinkType } from '../types';
import './Pagination.scss';
export interface IPaginationData {
    query?: Object;
    currentPage: number;
    totalPages: number;
    pageLimit: number;
    totalRecords: number;
    pageNeighbours: number;
}
export interface IPaginationState {
    currentPage: number;
    totalPages: number;
    pageLimit: number;
    totalRecords: number;
    pageNeighbours: number;
}
export interface IPaginationProps {
    totalRecords: number;
    pageLimit: number;
    pageNeighbours: number;
    query: Object;
    hidePaginationLimiter: boolean;
    linkType: LinkType;
    render: (state: IPaginationState) => void;
    onPageChanged: (paginationData: IPaginationData) => void;
}
declare const _default: React.MemoExoticComponent<({ pageLimit, pageNeighbours, totalRecords, query, hidePaginationLimiter, linkType, render, onPageChanged }: IPaginationProps) => JSX.Element>;
export default _default;
