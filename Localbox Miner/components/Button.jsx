import React, { useContext } from 'react'
import { themecontext } from '../context/Context'
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Button = () => {
    const {ThemeUpdateFun,theme}=useContext(themecontext)
  return (
    <div>
  
    <h2 onClick={ThemeUpdateFun} className='btn'>{theme=="Light"? <FaMoon  className='i1'/> : <IoSunnySharp  className='i1'/>}</h2>
      
    </div>
  )
}

export default Button
