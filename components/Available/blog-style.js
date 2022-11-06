import { makeStyles } from '@material-ui/core/styles';

const blogStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: '396px',
    '& > div': {
      [theme.breakpoints.down('md')]: {
        padding: 0,
      }
    }
  },
  props: {
    width: 240,
    height: 240,
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'center',
    // padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(4),
      top: theme.spacing(12),
      width: 240
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(1, 0),
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  link: {
    padding: 0,
    '& span': {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    }
  },
  nav: {
    position: 'absolute',
    top: '42%',
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    zIndex: 10,
    background: theme.palette.background.paper,
    border: 'none',
    boxShadow: 'none',
    transform: `scale(2.5) ${theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      transform: 'scale(1.2)',
      color: theme.palette.text.primary,
    },
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  },
  itemPropsFirst: {
    '& div': {
      width: theme.direction === 'rtl' ? 400 : 350,
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 500 : 300,
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500,
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  tostore: {
    marginTop: '0.5rem'
  }
}));

export default blogStyles;
