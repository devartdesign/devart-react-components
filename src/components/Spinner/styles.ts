import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    borderStyle: 'solid',
    borderRadius: '50%',
    animationName: {
      from: {
        transform: 'rotate(0)'
      },
      to: {
        transform: 'rotate(359deg)'
      }
    },
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});
