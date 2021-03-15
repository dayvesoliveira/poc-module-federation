import React from 'react';
import {Container, Box, Grid} from '@material-ui/core';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

const NotFound = () => (
  <div>
      <Header>
        <Logo width="100px" />
      </Header>
      <Container>
        <Box p={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>
                  Ops! Página não encontrada!
                </h1>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </div>
);

export default NotFound;