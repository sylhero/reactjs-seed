import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ match }) => {
    return <h1>{match.params.testId}</h1>;
};

Blog.propTypes = {
    match: PropTypes.object.isRequired
};
export default Blog;
