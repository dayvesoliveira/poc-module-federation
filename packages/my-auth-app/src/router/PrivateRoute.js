import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({
  children,
  component,
  ...rest
}) => {

  const { authenticated } = useContext(AuthContext);

  return (
    authenticated
    ? (
      <Route {...rest} component={component}>
        {children}
      </Route>
    ) : (
      <Redirect to="/login" />
    )
  );
};

export default PrivateRoute;