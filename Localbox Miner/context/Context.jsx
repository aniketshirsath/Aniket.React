import { createContext, useState } from "react";

export const themecontext=createContext()


export function ThemeContextFun({children}){

    const [theme, setheme]=useState("Light")

    function ThemeUpdateFun()
    {
        setheme(theme=="Light"?"Dark":"Light")
    }
    return(
        <themecontext.Provider value={{theme,ThemeUpdateFun}}>{children}</themecontext.Provider>
    )
}