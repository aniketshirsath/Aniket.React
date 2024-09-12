import React from 'react';
import { setTheme } from '../Counter/actiontype';
import { useSelector, useDispatch } from 'react-redux';


const Theme = () => {
    const { theme } = useSelector((state) => state.theme)
    // console.log(datafromstore)
    console.log(theme)
    const dispatch = useDispatch()

    const handleThemeChange = (newTheme) => {
        dispatch(setTheme(newTheme));
    };

    return (

        <div className="centered-container" style={{ position: 'absolute', left: "38%", top: "17%" }}>
            <div className="theme-buttons">
                <button className="btn btn-warning" onClick={() => handleThemeChange('light')} disabled={theme === 'light'}>
                    Switch To Light
                </button>
                <button className="btn btn-warning" onClick={() => handleThemeChange('dark')} disabled={theme === 'dark'}>
                    Switch To Dark
                </button>
            </div>
        </div>
    );
}

export default Theme;
