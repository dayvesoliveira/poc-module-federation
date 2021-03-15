import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
    textAlign: 'left',
  },
  pos: {
    fontSize: 12,
    marginBottom: 2,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default useStyles;