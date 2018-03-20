import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Blogs from './Blogs/Blogs';
import News from './News';
import PageNotFound from './PageNotFound';

const Routes = (
    <Switch>
        <Route exact path="/" component={News} />,
        <Route exact path="/about" component={About} />,
        <Route exact path="/blogs" component={Blogs} />,
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;
