import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

    const [data,setdata]=useState([])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        GetData()
    },[])

  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"50px"}}>PRODUCT PAGE </h1>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"90%",margin:"auto"}}>
            {data.map((el)=>(
                <div key={el.id} style={{textAlign:"center",boxShadow:"7px 4px 8px grey",padding:"11px"}}>
                    <h1>{el.id}</h1>
                    <Link to={`/descriptionpage/${el.id}`}>
                    <img height={200} src={el.image} alt="" />
                    </Link>
                    <h2>{el.title}</h2>
                    <h3>{el.price}</h3>
                    <h3>{el.category}</h3>
                    <p>{el.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product
