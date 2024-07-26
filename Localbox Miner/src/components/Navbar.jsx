import React, { useContext } from 'react'
import { themecontext } from '../context/Context'

const Navbar = () => {
    const {theme}=useContext(themecontext)
  return (
    <div>
      <h1>Navbar</h1>
      <h3>The Theme Is {theme}</h3>
    </div>
  )
}

export default Navbar
