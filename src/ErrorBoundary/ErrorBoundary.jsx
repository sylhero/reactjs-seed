import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    componentDidCatch = (error, info) => {
        this.setState({hasError: true});
        // eslint-disable-next-line no-console
        console.log(`The error is ${error} and the info is ${info}`);
    }

    render = () => {
        if (this.state.hasError) {
            return <h1>Something went wrong please check the console for details</h1>;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired
};

export default ErrorBoundary;
