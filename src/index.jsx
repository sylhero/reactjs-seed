import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Store from './Store';
import App from './App';

const store = Store.configureStore();
const rootElement = document.getElementById('root');
const appRender = (AppToRender) => {
    render(<AppContainer>
                <Provider store={store}>
                   <AppToRender />
                </Provider>
           </AppContainer>, rootElement);
};
appRender(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        appRender(NextApp);
    });
}

