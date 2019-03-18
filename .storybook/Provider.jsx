import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
const store = Store.configureStore();
const StoryProvider = ({ story }) => {
    return (
        <Provider store={store}>
            {story}
        </Provider>
  );
};

export default StoryProvider;
