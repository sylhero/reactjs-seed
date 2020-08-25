import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Welcome from '../Welcome';

const MainContent = (): React.ReactElement => {
    return (
        <div>
            <Switch>
                <Route path={['/', '/home']} exact component={Welcome} />
            </Switch>
        </div>
    );
};

export default MainContent;
