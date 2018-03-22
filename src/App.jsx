import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Routes from './Routes';
// eslint-disable-next-line no-unused-vars
// import styles from './App.scss';

const App = ({ theme }) => {
    const themeStyle = {
        backgroundColor: theme.themeColor,
        height: '100vh',
        color: 'blue'
    };
    return (
        <BrowserRouter>
            <div style={themeStyle}>
                <Header />
                {Routes}
            </div>
        </BrowserRouter>);
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    };
};

App.propTypes = {
    theme: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
