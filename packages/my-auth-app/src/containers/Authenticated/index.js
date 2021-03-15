import React, { useContext } from 'react';
import {Card, CardContent, Grid, Typography, Avatar} from '@material-ui/core';

import { AuthContext } from '../../providers/AuthProvider';
import useStyles from './styles';


const Authenticated = () => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();

  const getTextAvatar = (text) => text ? text.substring(0,1) : 'A';

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                Você está logado, na aplicação Auth.
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Avatar className={classes.orange}>
                {getTextAvatar(currentUser?.name)}
              </Avatar>
            </Grid>
            <Grid item xs={11}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {currentUser?.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {currentUser?.email}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Authenticated;