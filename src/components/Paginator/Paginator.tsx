import React, { memo, useMemo, useCallback, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'aphrodite/no-important';

import { LinkType, IPaginatorQuery } from './types';
import { createPaginationRange } from './util';

import styles from './styles';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const PaginationButtonLink = params => (
  <button type="button" className={css(styles.pageItemButton)} aria-label="Next" onClick={params.onClick}>
    {!params.hideTick && (<span aria-hidden="true">&laquo;</span>)}
    <span>{params.text}</span>
  </button>
);

const PaginationNavLink = params => (
  <NavLink to={`/page/${params.page}`}>
    <span>{params.text}</span>
  </NavLink>
);

const typeMap = {
  [LinkType.LINK]: PaginationNavLink,
  [LinkType.BUTTON]: PaginationButtonLink
};

export interface IPaginationState {
  currentPage: number;
  lastPage: number;
  totalPages: number;
  pageLimit: number;
  totalRecords: number;
  pageNeighbours: number;
}

export interface IPaginationProps {
  totalRecords: number;
  pageLimit: number;
  pageNeighbours: number;
  hidePaginationLimiter?: boolean;
  linkType?: LinkType;
  onPageChanged: (paginationData: IPaginatorQuery) => void;
}

const Pagination = ({
  pageLimit = 1,
  pageNeighbours = 0,
  totalRecords = 0,
  hidePaginationLimiter = false,
  linkType = LinkType.BUTTON,
  onPageChanged,
  children
}: React.PropsWithChildren<IPaginationProps>) => {
  const [state, setState] = useState<IPaginationState>(() => ({
    currentPage: 1,
    lastPage: 1,
    totalPages: 0,
    pageLimit: pageLimit,
    totalRecords: totalRecords,
    pageNeighbours: pageNeighbours
  }));

  const gotoPage = useCallback((props) => {
    const currentPage = Math.max(1, Math.min(props.page, props.totalPages));
    onPageChanged({ page: currentPage, limit: props.pageLimit });
  }, [onPageChanged]);

  const handleClick = useCallback(currentPage => (evt) => {
    evt.preventDefault();
    setState(prevProps => ({ ...prevProps, currentPage, lastPage: prevProps.currentPage }));
  }, []);

  const handleMoveLeft = useCallback((evt) => {
    evt.preventDefault();
    setState(prevProps => ({ ...prevProps, lastPage: prevProps.currentPage, currentPage: state.currentPage - (state.pageNeighbours * 2) - 1 }));
  }, [state.currentPage, state.pageNeighbours]);

  const handleMoveRight = useCallback((evt) => {
    evt.preventDefault();
    setState(prevProps => ({ ...prevProps, lastPage: prevProps.currentPage, currentPage: state.currentPage + (state.pageNeighbours * 2) + 1 }));
  }, [state.currentPage, state.pageNeighbours]);

  const setPageLimit = useCallback((evt) => {
    evt.preventDefault();
    evt.persist();
    setState(prevProps => ({ ...prevProps, pageLimit: Number(evt.target.value), lastPage: prevProps.currentPage }));
  }, [setState]);

  const calculatedPages = useMemo(() => {
    if (totalRecords > 0) {
      return { neighbours: Math.max(0, Math.min(state.pageNeighbours, 2)), totalPages: Math.ceil(totalRecords / state.pageLimit), totalRecords };
    }
    return { neighbours: pageNeighbours, totalPages: 0, totalRecords };
  }, [totalRecords, state.pageLimit, pageNeighbours]); // eslint-disable-line

  const paginationPages = useMemo(() => {
    const { neighbours, totalPages } = calculatedPages;
    const totalNumbers = (neighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, state.currentPage - neighbours);
      const endPage = Math.min(totalPages - 1, state.currentPage + neighbours);
      let pages = createPaginationRange({ from: startPage, to: endPage });
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = createPaginationRange({ from: startPage - spillOffset, to: startPage - 1 });
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = createPaginationRange({ from: endPage + 1, to: endPage + spillOffset });
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }
    return createPaginationRange({ from: 1, to: totalPages });
  }, [calculatedPages, state.currentPage]);

  useEffect(() => {
    if ((totalRecords > 0 && totalRecords !== calculatedPages.totalRecords) || pageLimit !== state.pageLimit || state.currentPage !== state.lastPage) {
      gotoPage({ page: state.currentPage, pageLimit: state.pageLimit, ...calculatedPages });
    }
  }, [setState, totalRecords, calculatedPages, state]); // eslint-disable-line
  return (
    <>
      {children}
      <div className={css(styles.paginationNav)}>
        {!hidePaginationLimiter && (
          <select
            className={css(styles.pageLimiter)}
            value={state.pageLimit}
            onChange={setPageLimit}
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
        )}
        {(totalRecords > 0 && calculatedPages.totalPages > 1) && (
          <nav className={css(styles.navPagination)} aria-label="nav-pagination">
            <ul className={css(styles.pagination)}>
              {paginationPages.map((page, index) => {
                if (page === LEFT_PAGE) {
                  return (
                    <li key={index} className={css(styles.pageItem)}>
                      {typeMap[linkType]({ text: 'Prev', onClick: handleMoveLeft, page })}
                    </li>
                  );
                }

                if (page === RIGHT_PAGE) {
                  return (
                    <li key={index} className={css(styles.pageItem)}>
                      {typeMap[linkType]({ text: 'Prev', onClick: handleMoveRight, page })}
                    </li>
                  );
                }

                return (
                  <li key={index} className={state.currentPage === page ? `${css(styles.pageItemActive)}` : `${css(styles.pageItem)}`}>
                    {typeMap[linkType]({ page, text: page, onClick: handleClick(page), hideTick: true })}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default memo(Pagination);
