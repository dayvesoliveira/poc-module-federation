import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';

const CardDashboard = () => (
  <Card>
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            Card Dashboard.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" gutterBottom>
            Nononono nonono nonono nonono
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default CardDashboard;