import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthProvider from 'auth/AuthProvider';

import Router from './routes/Router';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <>
          <Router />
        </>
      </AuthProvider>
    </>
  );
}

export default App;