import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthProvider from 'auth/AuthProvider';

import Router from './router/Router';

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