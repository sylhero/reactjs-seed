// @flow

import React from 'react';
// $FlowFixMe
import WelcomeCss from './Welcome.scss';

type Props = {
    username: string
};

const Welcome = (props: Props) => {
    return (
        <div>
            <h1 className={WelcomeCss.test}>hello {props.username}</h1>
        </div>);
};


export default Welcome;
