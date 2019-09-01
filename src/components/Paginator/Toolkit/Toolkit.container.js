import { connect } from 'react-redux';

// import { paginatorState } from '../../../../state-mgmt';
import Toolkit from './Toolkit';

export const mapStateToProps = state => ({
  search: state.paginator.search,
  filters: state.blog.filters
});

// export const mapDispatchToProps = dispatch => ({
//   onSearch: text => dispatch(paginatorState.actions.onSearch(text)),
// });

export default connect(mapStateToProps, null)(Toolkit);
