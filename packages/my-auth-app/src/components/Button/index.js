import React from 'react';
import { CircularProgress, Button as MaterialButton } from '@material-ui/core';
import useStyles from './style';

const Button = ({
  children,
  loading,
  ...props
}) => {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <MaterialButton {...props}>{children}</MaterialButton>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default Button;