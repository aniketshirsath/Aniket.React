import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '/src/App.css'
import { AuthContext } from '../Context/Authcontext'

const Navbar = () => {

  const { Logout } = useContext(AuthContext)
  return (
    <div className='menu'>
      <NavLink style={({ isActive }) => {
        return isActive ? { color: "red" } : { color: "white" };
      }} to={"/"}>HOME</NavLink>
      <NavLink style={({ isActive }) => {
        return isActive ? { color: "red" } : { color: "white" };
      }} to={"/about"}>ABOUT</NavLink>
      <NavLink style={({ isActive }) => {
        return isActive ? { color: "red" } : { color: "white" };
      }} to={"/product"}>PRODUCT</NavLink>
      <NavLink style={({ isActive }) => {
        return isActive ? { color: "red" } : { color: "white" };
      }} to={"/login"}>LOGIN</NavLink>
      <button onClick={Logout} style={{ height: 40, width: 100, borderRadius:15, border:'1px solid black'}}><b>LOGOUT</b></button>
    </div>
  )
}

export default Navbar
