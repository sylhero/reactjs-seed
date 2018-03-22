import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Blogs = ({ state }) => {
    const test = () => {
        console.log(state);
    };
    return (
        <div>
            <button onClick={test}>Blogs</button>
        </div>);
};
const mapStateToProps = (state) => {
    return {
        state
    };
};

Blogs.propTypes = {
    state: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Blogs);
