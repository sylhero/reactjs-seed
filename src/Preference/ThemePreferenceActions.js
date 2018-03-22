import ThemePreferenceActionTypes from './ThemePreferenceActionTypes';

const setThemeColor = (color) => {
    return {
        type: ThemePreferenceActionTypes.SET_THEME_COLOR,
        color
    };
};

const ThemePreferenceActions = {
    setThemeColor
};

export default ThemePreferenceActions;

