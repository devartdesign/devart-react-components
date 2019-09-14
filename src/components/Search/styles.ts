import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'devart-utils/dist/models/general';

export default StyleSheet.create({
  search: {
    position: 'relative',
    width: '100%',
  },
  searchIcon: {
    width: 3 * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    fill: Color.PRIMARY
  },
  icon: {
    background: '../../assets/icons/search.svg'
  },
  input: {
    color: 'inherit',
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 33,
    width: '100%',
    borderRadius: 3,
    border: '1px solid #eee',
    fontSize: 14
    // transition: theme.transitions.create('width'),
  }
});
