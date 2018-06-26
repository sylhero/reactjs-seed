// @flow

import React from 'react';
import { Icon } from 'antd';
// $FlowFixMe
import WelcomeCss from './Welcome.scss';

type Props = {
    username: string
};

const Welcome = (props: Props) => {
    return (
        <div>
            <Icon type="smile-o" />
            <h1 className={WelcomeCss.test}>hello {props.username}</h1>
        </div>);
};


export default Welcome;
