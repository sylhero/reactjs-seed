import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
// import ErrorBoundary from './common/hoc/ErrorBoundary';
import App from './App';
import { RecoilRoot } from 'recoil';
const rootElement = document.getElementById('root');
const appRender = () => {
    render(
        <RecoilRoot>
            <App />
        </RecoilRoot>,
        rootElement
    );
};
appRender();
