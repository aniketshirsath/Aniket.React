import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-evenly fixed-top' style={{backgroundColor:'black',height:'60px',alignItems:'center'}}>
      <Link to={"/login"} style={{textDecoration:"none"}} className='fs-5 text-white fw-bold'>LOGIN</Link>
      <Link to={"/"} style={{textDecoration:"none"}} className='fs-5 text-white fw-bold'>PRODUCTS</Link>
    </div>
  )
}

export default Navbar
