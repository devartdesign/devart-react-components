import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  paginationNav: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageLimiter: {
    display: 'flex',
    width: '65px',
    height: '40px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  navPagination: {
    display: 'flex',
    flexBasis: '100%;',
  },
  pagination: {
    backgroundColor: '#FFF',
    padding: '0 10px',
    margin: '10px 0',
    display: 'flex',
    flexGrow: 1,
    listStyleType: 'none',
  },
  pageItem: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 40,
    height: 25,
  },
  pageItemButton: {
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    padding: '0',
    ':hover': {
      backgroundColor: '#546e7a',
      color: '#FFF',
    }
  },
  pageItemActive: {
    backgroundColor: '#29434e',
    color: '#FFF',
  }
});
