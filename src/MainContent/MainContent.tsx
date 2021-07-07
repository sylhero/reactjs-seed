import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Wheel from '../Wheel';

const MainContent = (): React.ReactElement => {
    return (
        <div>
            <Switch>
                <Route path={['/:id/']} exact component={Wheel} />
            </Switch>
        </div>
    );
};

export default MainContent;
