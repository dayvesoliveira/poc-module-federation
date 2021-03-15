import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

import authRoutesFunc from 'auth/authRoutes';
import routes from './routes';

const authRoutes = authRoutesFunc({redirectWhenSignIn:'/dashboard'});
const shellRoutes = routes();

const allRoutes = [
  ...authRoutes,
  ...shellRoutes,
];

console.log(allRoutes)

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <>
      <Suspense fallback={ <Loading full /> }>
        <Switch>
          {
            allRoutes.map(route =>
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            )
          }

          <Redirect to="/pagina-nao-encontrada" />

        </Switch>
      </Suspense>
    </>
  </BrowserRouter>
);

export default Router;