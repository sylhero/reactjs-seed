import React from 'react';
import { Route, Switch } from 'react-router';
import Welcome from './Welcome';
import TestMe from './TestMe';
import PageNotFound from './PageNotFound';

const Routes = (
    <Switch>
        <Route exact path="/" component={Welcome} />
,
        <Route exact path="/test" component={TestMe} />
,
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;
