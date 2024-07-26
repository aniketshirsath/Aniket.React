import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/Authcontext'

const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {Login}=useContext(AuthContext)

  const handlesubmit=(e)=>{
    e.preventDefault()

    let userdata={
      email,
      password
    }

    console.log(userdata)

    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>Login(res.data.token))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"50px"}}>LOGIN PAGE</h1>

      <form action="" onSubmit={(e)=>handlesubmit(e)} style={{display:"flex",justifyContent:"center"}}> 
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter Your Email' style={{padding:10}}/>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Your Password' style={{padding:10}}/>
        <input type="submit" className='submit'/>
      </form>
    </div>
  )
}

export default Login
