import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './AppLayout';
import PrivateRoute from './Common/hoc/PrivateRoute';
import Login from './Login';
import NotFoundPage from './NotFoundPage';

const rootRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/:id/login" exact component={Login} />
                <PrivateRoute path="/:id/" component={AppLayout} />
                <Route component={NotFoundPage} path="*" />
            </Switch>
        </div>
    );
};

const Routes = rootRoutes();

export default Routes;
