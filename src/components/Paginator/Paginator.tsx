import React, { memo, useCallback, useState } from 'react';

import Pagination from './Pagination';
// import PaginationToolkit from './Toolkit';

import { LinkType, IPaginatorProps, IPaginatorState } from './types';
import './Paginator.scss';

const Paginator = ({
  totalRecords,
  pageLimit = 1,
  pageNeighbours = 2,
  linkType = LinkType.BUTTON,
  filterOptions = [],
  hideColumnOptions = [],
  enableToolkit = false,
  hidePaginationLimiter = false,
  disableFilter = false,
  disableHideColumns = false,
  disableSearch = false,
  handleChange,
  children
}: React.PropsWithChildren<IPaginatorProps>) => {
  const [query, setQuery] = useState<IPaginatorState>({});
  const onChange = useCallback((newQuery) => {
    setQuery(prevQuery => ({ ...prevQuery, ...newQuery }));
    handleChange(newQuery);
  }, [setQuery, handleChange]);
  return (
    <div className="paginator">
      <Pagination
        totalRecords={totalRecords}
        pageLimit={pageLimit}
        pageNeighbours={pageNeighbours}
        onPageChanged={onChange}
        query={query}
        hidePaginationLimiter={hidePaginationLimiter}
        linkType={linkType}
        render={paginationProps => (
          <>
            {enableToolkit && (
              <div>Toolkit</div>
              // <PaginationToolkit
              //   onChange={onChange}
              //   filterOptions={filterOptions}
              //   hideColumnOptions={hideColumnOptions}
              //   paginationProps={paginationProps}
              //   disableFilter={disableFilter}
              //   disableHideColumns={disableHideColumns}
              //   disableSearch={disableSearch}
              // />
            )}
            {children}
          </>
        )}
      />
    </div>
  );
};

export default memo(Paginator);
