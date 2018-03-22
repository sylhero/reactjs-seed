import ThemePreferenceActionTypes from './ThemePreferenceActionTypes';

const initialState = {
    themeColor: ''
};

const theme = (state = initialState, action) => {
    switch (action.type) {
        case ThemePreferenceActionTypes.SET_THEME_COLOR:
            return {
                ...state,
                themeColor: action.color
            };
        default:
            return state;
    }
};

const ThemePreferenceReducers = {
    theme
};

export default ThemePreferenceReducers;
