import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import ErrorBoundary from './common/hoc/ErrorBoundary';
import App from './App';

const rootElement = document.getElementById('root');
const appRender = () => {
    render(
        <AppContainer>
            <App />
        </AppContainer>,
        rootElement
    );
};
appRender();
