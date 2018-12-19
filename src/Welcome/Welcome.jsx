import React from 'react';
import { Icon } from 'antd';

import WelcomeCss from './Welcome.scss';

const Welcome = (props) => {
    return (
        <div>
            <Icon type="smile-o" />
            <h1 className={WelcomeCss.test}>
                {props.username}
            </h1>
        </div>);
};

export default Welcome;
