import React, { lazy } from 'react';

const NotFound = lazy(() => import('../containers/NotFound'));

const routes = () => {
  return [
    {
      path: '/pagina-nao-encontrada',
      component: (props) => <NotFound />,
      exact: true,
    },
  ];
};

export default routes;