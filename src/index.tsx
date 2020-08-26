import React from 'react';
import { render } from 'react-dom';
// import ErrorBoundary from './common/hoc/ErrorBoundary';
import App from './App';

const rootElement = document.getElementById('root');
const appRender = () => {
    render(<App />, rootElement);
};
appRender();
