import { combineReducers } from 'redux';
import NewsReducers from './News/NewsReducers';
import ThemePreferenceReducers from './Preference/ThemePreferenceReducers';

const Reducers = combineReducers({
    ...NewsReducers,
    ...ThemePreferenceReducers
});

export default Reducers;
