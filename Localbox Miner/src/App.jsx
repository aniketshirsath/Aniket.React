import { useContext, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Midsection from './components/Midsection'
import Button from './components/Button'
import { themecontext } from './context/Context'

function App() {
const {theme}=useContext(themecontext)
console.log(theme)

  return (
    <>
      <div style={{backgroundColor:theme=="Light"?"white":"black",color:theme=="Light"? "black":"white",padding:"20px"}}>
        <Navbar />
        <Midsection />
      </div>
        <Button />
    </>
    
  )
}

export default App
