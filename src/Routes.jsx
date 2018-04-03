import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import PageNotFound from './PageNotFound';

const Routes = (
    <Switch>
        <Route exact path="/" component={Welcome} />,
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;
