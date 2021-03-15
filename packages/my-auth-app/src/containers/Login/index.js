import React, { useContext, useEffect } from 'react';
import { Paper } from '@material-ui/core';

import LoginContainer from '../../styles/LoginContainer';
import LoginForm from '../../components/LoginForm';
import { AuthContext } from '../../providers/AuthProvider';

const Login = ({
  redirectWhenSignIn,
  history
}) => {

  const { authenticated } = useContext(AuthContext);

  useEffect(() => {

    if (authenticated) {
      history.push(redirectWhenSignIn);
    }

  }, [authenticated]);

  return (
    <LoginContainer>
      <Paper>
        <LoginForm />
      </Paper>
    </LoginContainer>
  );

};

export default Login;