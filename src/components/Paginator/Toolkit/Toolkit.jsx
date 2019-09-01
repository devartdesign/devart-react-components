import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import Filter from './Filter';

import './Toolkit.scss';

export default class Toolkit extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    filterOptions: PropTypes.array,
    hideColumnOptions: PropTypes.array,
    paginationProps: PropTypes.object,
    disableFilter: PropTypes.bool,
    disableHideColumns: PropTypes.bool,
    disableSearch: PropTypes.bool,
    search: PropTypes.string,
    filters: PropTypes.object
  };

  static defaultProps = {
    filterOptions: [],
    hideColumnOptions: [],
    paginationProps: {},
    disableFilter: false,
    disableHideColumns: false,
    disableSearch: false,
    search: '',
    filters: {},
  };

  state = {
    filters: [],
    hideColumns: []
  };

  componentDidUpdate(prevProps) {
    // esto tiene que ir en un side effect..
    const { filters, search, paginationProps, onChange } = this.props;
    if (prevProps.search !== search) {
      onChange({
        ...paginationProps,
        type: 'search',
        search,
        filters,
        hideColumns: this.state.hideColumns
      });
    }
    if (prevProps.filters !== filters) {
      onChange({
        ...paginationProps,
        type: 'filters',
        search,
        filters,
        hideColumns: this.state.hideColumns
      });
    }
  }

  handleChange = (response) => {
    this.setState({
      [response.name]: response.value
    }, () => {
      this.props.onChange({
        ...this.props.paginationProps,
        type: response.name,
        search: this.props.search,
        filters: this.state.filters,
        hideColumns: this.state.hideColumns
      });
    });
  };

  render() {
    const {
      hideColumnOptions,
      filterOptions,
      disableFilter,
      disableHideColumns,
      disableSearch
    } = this.props;

    return (
      <div className="paginator__toolkit">
        {!disableSearch && (
          <div className="paginator__toolkit__item">
            <Search
              onSearch={this.handleChange}
              value={this.props.search}
            />
          </div>
        )}
        {!disableFilter && (
          <div className="paginator__toolkit__item">
            <Filter
              name="filters"
              label="Filters"
              onSelect={this.handleChange}
              options={filterOptions}
              selectedOptions={this.state.filters}
            />
          </div>
        )}
        {!disableHideColumns && (
          <div className="paginator__toolkit__item">
            <Filter
              name="hideColumns"
              label="Hide Columns"
              onSelect={this.handleChange}
              options={hideColumnOptions}
              selectedOptions={this.state.hideColumns}
              width={140}
            />
          </div>
        )}
      </div>
    );
  }
}
