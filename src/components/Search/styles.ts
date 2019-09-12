import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'devart-utils/dist/models/general';

export default StyleSheet.create({
  search: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: Color.WHITE,
    '&:hover': {
      backgroundColor: Color.LIGHT_GRAY
    },
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    width: 3 * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    background: '../../assets/icons/search.svg'
  },
  input: {
    color: 'inherit',
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 3 * 10,
    width: '100%',
    // transition: theme.transitions.create('width'),
  }
});
