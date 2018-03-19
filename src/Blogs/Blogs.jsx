import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Blog from './Blog';

const Blogs = ({ match, history }) => {
    const test = () => {
        history.push(`${match.url}/:testId`);
    };
    return (
        <div>
            <button onClick={test}>Blogs</button>
            <Route path={`${match.url}/:testId`} component={Blog} />
        </div>);
};

Blogs.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Blogs;
