import React from 'react';
import { Route, Switch } from 'react-router';
// import Welcome from './Welcome';
import TestMe from './TestMe';
import Login from './Login';
import PageNotFound from './PageNotFound';
import Hook from './Hook';

const Routes = (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/test" component={TestMe} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/hook" component={Hook} />
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;
