// @flow strict
import React from 'react';
import { Icon } from 'antd';

import WelcomeCss from './Welcome.scss';

type Props = {
    username: string
};

const Welcome = (props: Props) => {
    return (
        <div>
            <Icon type="smile-o" />
            <h1 className={WelcomeCss.test}>
                {props.username}
            </h1>
        </div>);
};

export default Welcome;
