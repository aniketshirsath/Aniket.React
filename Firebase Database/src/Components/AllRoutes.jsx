import React from 'react'
import Productpage from './ProductPage'
import Privetpage from './Privatepage'
import Loginpage from './LoginPage'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Privetpage><Productpage/></Privetpage>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
