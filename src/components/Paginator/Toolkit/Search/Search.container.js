import { connect } from 'react-redux';

import { paginatorState } from '../../../../../state-mgmt';
import Search from './Search';

export const mapStateToProps = state => ({
  search: state.paginator.search
});

export const mapDispatchToProps = dispatch => ({
  onSearch: text => dispatch(paginatorState.actions.onSearch(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
