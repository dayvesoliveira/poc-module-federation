import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import authRoutes from 'auth/authRoutes';
import routes from './routes';

const internalAuthRoutes = authRoutes({ redirectWhenSignIn: '/dashboard' });
const internalRoutes = routes();

const allRoutes = [
  ...internalAuthRoutes,
  ...internalRoutes,
];

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Suspense
          fallback={
            <Loading text="Carregando..." />
          }
        >
          <Switch>
            {allRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Redirect to="/dashboard" />
          </Switch>
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;