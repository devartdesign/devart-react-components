import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { styles } from './styles';

class Search extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    onSearch: PropTypes.func.isRequired,
    search: PropTypes.string
  };

  static defaultProps = {
    classes: {},
    search: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.onSearch(event.target.value);
  };

  render() {
    const { classes, search } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          name="search"
          placeholder="Search…"
          value={search}
          onChange={this.handleChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
