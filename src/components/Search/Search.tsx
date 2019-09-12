import React, { memo, useCallback, useState, useEffect } from 'react';
import { css } from 'aphrodite/no-important';

import { SearchIcon } from '../../icons';
import styles from './styles';

export interface ISearchProps {
  onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: ISearchProps) => {
  const [state, setState] = useState('');
  const handleChange = useCallback((event) => {
    event.preventDefault();
    setState(event.target.value);
  }, []);

  useEffect(() => {
    if (state.length > 0) onSearch(state);
  }, [onSearch, state]);
  return (
    <div className={css(styles.search)}>
      <div className={css(styles.searchIcon)}>
        <SearchIcon />
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search…"
        value={state}
        onChange={handleChange}
      />
    </div>
  );
};

export default memo(Search);
