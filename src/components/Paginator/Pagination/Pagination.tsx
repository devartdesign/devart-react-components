/* eslint-disable react/no-array-index-key */
import React, { memo, useMemo, useCallback, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';

import { LinkType } from '../types';
import { createPaginationRange } from './util';

import './Pagination.scss';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const getButtonLink = params => (
  <button type="button" className="page-link" aria-label="Next" onClick={params.onClick}>
    {!params.hideTick && (<span aria-hidden="true">&laquo;</span>)}
    <span className="sr-only">{params.text}</span>
  </button>
);

const getNavLink = params => (
  <NavLink to={`/page/${params.page}`}>
    <span className="sr-only">{params.text}</span>
  </NavLink>
);

const typeMap = {
  [LinkType.LINK]: getButtonLink,
  [LinkType.BUTTON]: getNavLink
};

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

const Pagination = ({
    pageLimit = 1,
    pageNeighbours = 0,
    totalRecords = 0,
    query = {},
    hidePaginationLimiter = false,
    linkType = LinkType.BUTTON,
    render,
    onPageChanged
  }: IPaginationProps) => {
  const [state, setState] = useState<IPaginationState>({
    currentPage: 1,
    totalPages: 0,
    pageLimit: pageLimit,
    totalRecords: totalRecords,
    pageNeighbours: pageNeighbours
  });
  const gotoPage = useCallback((page) => {
    const currentPage = Math.max(1, Math.min(page, state.totalPages));
    const paginationData: IPaginationData = {
      ...query,
      currentPage,
      totalPages: state.totalPages,
      pageLimit: state.pageLimit,
      totalRecords: state.totalRecords,
      pageNeighbours: state.pageNeighbours
    };
    setState(paginationData);
    onPageChanged(paginationData);
  }, [query, state, onPageChanged, setState]);
  const handleClick = useCallback(page => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  }, [gotoPage]);

  const handleMoveLeft = useCallback((evt) => {
    evt.preventDefault();
    gotoPage(state.currentPage - (state.pageNeighbours * 2) - 1);
  }, [state.currentPage, state.pageNeighbours, gotoPage]);

  const handleMoveRight = useCallback((evt) => {
    evt.preventDefault();
    gotoPage(state.currentPage + (state.pageNeighbours * 2) + 1);
  }, [state.currentPage, state.pageNeighbours, gotoPage]);

  const setPageLimit = useCallback((evt) => {
    evt.preventDefault();
    setState(prevState => ({ ...prevState, pageLimit: Number(evt.target.value) }));
    const totalPages = Math.ceil(state.totalRecords / state.pageLimit);
    setState(prevState => ({ ...prevState, totalPages }));
    gotoPage(state.currentPage);
  }, [setState, gotoPage, state.totalRecords, state.currentPage, state.pageLimit]);

  const fetchPageNumbers = useCallback(() => {
    const totalNumbers = (state.pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;
    if (state.totalPages > totalBlocks) {
      const startPage = Math.max(2, state.currentPage - state.pageNeighbours);
      const endPage = Math.min(state.totalPages - 1, state.currentPage + state.pageNeighbours);
      let pages = createPaginationRange({ from: startPage, to: endPage });
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (state.totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = createPaginationRange({ from: startPage - spillOffset, to: startPage - 1});
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = createPaginationRange({ from: endPage + 1, to: endPage + spillOffset});
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, state.totalPages];
    }
    return createPaginationRange({ from: 1, to: state.totalPages });
  }, [state.totalPages, state.pageNeighbours, state.currentPage]);
  const paginationPages = useMemo(() => fetchPageNumbers(), [fetchPageNumbers]);

  useEffect(() => {
    const neighbours = Math.max(0, Math.min(state.pageNeighbours, 2));
    const totalPages = Math.ceil(totalRecords / state.pageLimit);
    setState(prevState => ({ ...prevState, pageNeighbours: neighbours, totalPages }));
  }, [totalRecords, state.pageNeighbours, state.pageLimit, setState]);
  useEffect(() => {
    if (state.totalRecords > 0 && state.totalRecords !== totalRecords) {
      const totalPages = Math.ceil(state.totalRecords / state.pageLimit);
      setState(prevState => ({ ...prevState, totalPages }));
      gotoPage(state.currentPage);
    }
  }, [state.currentPage, state.totalRecords, state.pageLimit, setState, gotoPage, totalRecords]);
  return (
    <React.Fragment>
      {render(state)}
      <div className="pagination__nav">
        {!hidePaginationLimiter && (
          <Select
            className="pageLimiter"
            native={true}
            value={state.pageLimit}
            onChange={setPageLimit}
            input={(
              <OutlinedInput
                name="Limit"
                labelWidth={0}
                id="outlined-age-native-simple"
              />
            )}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </Select>
        )}
        {(totalRecords > 0 && state.totalPages > 1) && (
          <nav className="nav-pagination" aria-label="nav-pagination">
            <ul className="pagination">
              {paginationPages.map((page, index) => {
                if (page === LEFT_PAGE) {
                  return (
                    <li key={index} className="page-item">
                      {typeMap[linkType]({ text: 'Prev', onClick: handleMoveLeft, page })}
                    </li>
                  );
                }

                if (page === RIGHT_PAGE) {
                  return (
                    <li key={index} className="page-item">
                      {typeMap[linkType]({ text: 'Prev', onClick: handleMoveRight, page })}
                    </li>
                  );
                }

                return (
                  <li key={index} className={`page-item${state.currentPage === page ? ' active' : ''}`}>
                    {typeMap[linkType]({ page, text: page, onClick: handleClick(page), hideTick: true })}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </React.Fragment>
  );
};

export default memo(Pagination);
