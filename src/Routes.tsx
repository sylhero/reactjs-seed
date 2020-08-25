import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './AppLayout';
import PrivateRoute from './Common/hoc/PrivateRoute';
import Welcome from './Welcome';

const rootRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" exact component={Welcome} />
                <PrivateRoute path="/" component={AppLayout} />
            </Switch>
        </div>
    );
};

const Routes = rootRoutes();

export default Routes;
