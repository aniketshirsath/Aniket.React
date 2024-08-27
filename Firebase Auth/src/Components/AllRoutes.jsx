import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './LoginPage'
import Productpage from './ProductPage'
import Privatepage from './PrivatePage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Privatepage><Productpage/></Privatepage>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
