import { StyleSheet } from 'aphrodite/no-important';
import { Color } from 'devart-utils/dist/models/general';

export default StyleSheet.create({
  container: {
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.87)',
    border: 'none',
    height: '32px',
    display: 'inline-flex',
    outline: '0',
    padding: '0',
    fontSize: '0.8125rem',
    boxSizing: 'border-box',
    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    alignItems: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    whiteSpace: 'nowrap',
    borderRadius: '16px',
    verticalAlign: 'middle',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: '#e0e0e0',
  },
  label: {
    cursor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    paddingLeft: 12,
    paddingRight: 12,
  },
  labelWithIcon: {
    paddingRight: 0
  },
  icon: {
    fill: Color.PRIMARY
  }
});
