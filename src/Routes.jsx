import React from 'react';
import { Route, Switch } from 'react-router';
import Welcome from './Welcome';
import TestMe from './TestMe';
import Login from './Login';
import PageNotFound from './PageNotFound';

const Routes = (
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/test" component={TestMe} />
        <Route exact path="/login" component={Login} />
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;
