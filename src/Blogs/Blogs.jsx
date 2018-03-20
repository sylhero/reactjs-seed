import React from 'react';
import PropTypes from 'prop-types';


const Blogs = ({ history }) => {
    const test = () => {
        history.push('/');
    };
    return (
        <div>
            <button onClick={test}>Blogs</button>
        </div>);
};

Blogs.propTypes = {
    history: PropTypes.object.isRequired
};

export default Blogs;
