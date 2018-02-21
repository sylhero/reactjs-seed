import React from 'react';
import PropTypes from 'prop-types';
import WelcomeCss from './Welcome.scss';


const Welcome = ({ username }) => {
    return (
        <div>
            <h1 className={WelcomeCss.test}>hello {username}</h1>
        </div>);
};

Welcome.propTypes = {
    username: PropTypes.string.isRequired
};

export default Welcome;
