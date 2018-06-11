import { combineReducers } from 'redux';
import TestMeReducers from './TestMe/Reducers';

const Reducers = combineReducers({
    ...TestMeReducers
});

export default Reducers;
