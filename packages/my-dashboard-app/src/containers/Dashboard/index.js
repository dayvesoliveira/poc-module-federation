import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import ContainerShell from 'shell/ContainerShell';
import Authenticated from 'auth/Authenticated';

const Dashboard = () => (
  <ContainerShell>
    <Layout>
      <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Dashboard</h1>
            </Grid>
            <Grid item xs={12}>
              <Authenticated />
            </Grid>
          </Grid>
      </Box>
    </Layout>
  </ContainerShell>
);

export default Dashboard;