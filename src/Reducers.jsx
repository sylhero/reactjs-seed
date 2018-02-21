import { combineReducers } from 'redux';
import NewsReducers from './News/NewsReducers';

const Reducers = combineReducers({
    ...NewsReducers
});

export default Reducers;
