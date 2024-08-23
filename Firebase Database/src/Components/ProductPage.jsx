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
            <div className="container col-4" key={el.id} >
              <img src={el.image} alt="" className='h-50 w-75' />
              <h5>{el.title}</h5>
              <p>{el.price}</p>
              <p>{el.description.substring(0, 100)}</p>
              <p>{el.category}</p>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Productpage