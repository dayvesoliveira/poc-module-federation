import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

import routes from './routes';

const authRoutes = routes();

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
            {authRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}

            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;