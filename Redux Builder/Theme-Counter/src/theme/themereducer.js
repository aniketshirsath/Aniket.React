import { SET_THEME } from './../Counter/actiontype';

const initialState = {
    theme: 'light',
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Dark_Theme":
            return { theme: 'dark' }
        case "Light_Theme":
            return { theme: 'light' }
        case SET_THEME:
            return { theme: action.payload };
        default:
            return state;
    }
};

export default themeReducer;
