import { combineReducers } from 'redux';
import TestMeReducers from './TestMe/Reducers';

const WidgetReducers = {
    ...TestMeReducers
};

const Reducers = combineReducers({ ...WidgetReducers });


export {
    Reducers as default,
    WidgetReducers
};
