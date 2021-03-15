import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },

  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -5,
    marginLeft: -12,
  },

}));

export default useStyles;