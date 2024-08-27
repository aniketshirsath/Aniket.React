import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Productpage = () => {
    const [data,setdata]=useState([])
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>setdata(res.data))
    .then((err)=>console.log(err))
  return (
    <div>
        <Navbar/>
         <div className="d-flex flex-wrap mt-5 pt-5">
       {
          data.map((el) => (
            <div className="col-6" key={el.id} >
              <img src={el.image} alt="" className='h-50 w-50' />
              <h5 style={{color:'white'}}>{el.title}</h5>
              <p style={{color:'white'}}>{el.price}</p>
              <p style={{color:'white'}}>{el.description}</p>
              <p style={{color:'white'}}>{el.category}</p>
            
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Productpage
