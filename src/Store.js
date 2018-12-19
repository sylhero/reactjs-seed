import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers';

let middleware = [];
if (process.env.NODE_ENV === 'production') {
    middleware = [ReduxThunk, promiseMiddleware()];
} else {
    middleware = [reduxImmutableStateInvariant(), ReduxThunk, promiseMiddleware()];
}
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
    const store = createStore(
        Reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
    return store;
};

const Store = {
    configureStore
};

export default Store;
