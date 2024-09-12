export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const SET_THEME = 'SET_THEME';

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});