import React, { lazy } from 'react';
import PrivateRoute from 'auth/PrivateRoute';

const Dashboard = lazy(() => import('../containers/Dashboard'));

const routes = () => {
    return [
      {
        path: '/dashboard',
        component: (props) => <PrivateRoute {...props} component={Dashboard} />,
        exact: true
      }
    ]
};

export default routes;