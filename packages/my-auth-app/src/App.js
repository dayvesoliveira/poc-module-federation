import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';

import theme from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;