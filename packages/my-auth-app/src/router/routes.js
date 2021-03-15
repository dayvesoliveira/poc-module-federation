import React, { lazy } from 'react';

const Login = lazy(() => import('../containers/Login'));
const Authenticated = lazy(() => import('../containers/Authenticated'));
const RecoveryPassword = lazy(() => import('../containers/RecoveryPassword'));

const routes = (opt = {redirectWhenSignIn: '/authenticated'}) => {
    const {redirectWhenSignIn} = opt;

    return [
        {
            path: '/login',
            component: (props) => <Login {...props} redirectWhenSignIn={redirectWhenSignIn}/>,
            exact: true
        },
        {
            path: '/recovery-password',
            component: RecoveryPassword,
            exact: true
        },
        {
            path: '/authenticated',
            component: (props) => <PrivateRoute {...props} component={Authenticated} />,
            exact: true
        }
    ]
};

export default routes;