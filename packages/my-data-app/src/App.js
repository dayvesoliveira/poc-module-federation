import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import CardDashboard from './containers/CardDashboard';

import theme from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Dashbord - Data</h1>
      <CardDashboard></CardDashboard>
    </ThemeProvider>
  );
}

export default App;