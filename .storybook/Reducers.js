import { combineReducers } from 'redux';
import WelcomeReducers from '../src/Widgets/Welcome/Reducers';

const WidgetReducers = {
    ...WelcomeReducers
};

const Reducers = combineReducers({ ...WidgetReducers });


export {
    Reducers as default,
    WidgetReducers
};
