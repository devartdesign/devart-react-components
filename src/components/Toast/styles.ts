import { StyleSheet } from 'aphrodite/no-important';
import { hexToRgba } from 'devart-utils/dist/utils';
import { STYLE } from '../../constants';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,.1)',
    boxShadow: '0 4px 12px rgba(0,0,0,.1)',
    borderRadius: 4,
    maxWidth: 300,
    minWidth: 300,
    backgroundClip: 'padding-box'
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 12px',
    borderBottom: '1px solid rgba(0,0,0,.05)',
    lineHeight: 1.8,
    textTransform: 'capitalize',
    color: STYLE.COLOR.DARK_GRAY,
    backgroundColor: hexToRgba(STYLE.COLOR.WHITE, 85),
    backgroundClip: 'padding-box'
  },
  button: {
    appearance: 'none',
    padding: 0,
    paddingLeft: 10,
    border: 0,
    backgroundColor: 'transparent'
  },
  body: {
    padding: 12,
    textTransform: 'capitalize',
    color: STYLE.COLOR.WHITE
  },
  success: {
    backgroundColor: STYLE.COLOR.GREEN
  },
  warning: {
    backgroundColor: STYLE.COLOR.FAVORITE
  },
  info: {
    backgroundColor: STYLE.COLOR.SECONDARY
  },
  danger: {
    backgroundColor: STYLE.COLOR.NONARY
  }
});
