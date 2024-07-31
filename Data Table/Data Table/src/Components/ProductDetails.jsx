import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [singledata, setSingledata] = useState([])

  let { id } = useParams()

  const ProductFetch = () => {
    axios.get(`http://localhost:3002/posts/${id}`).then((res) => setSingledata(res.data)).catch((err) => console.log(err))
  }

  const { image, price, title, description, category } = singledata



  useEffect(() => {
    ProductFetch()
  }, [])




  return (
    <>
      <div className="container-fluid">
        <div className="conatiner mt-2 pt-5" style={{ width: "80%", margin: 'auto' }}>
          <div className="row mt-5 pt-5">
            <div className="col-12 col-md-5 d-flex align-items-center m-auto">
              <img src={image} className="img-fluid p-3" alt="Product Image" />
            </div>
            <div className="col-12 col-md-6 offset-md-1 d-flex flex-column justify-content-center p-4">
              <h1>Product Name: {title}</h1>
              <p>Product {description}</p>
              <strong>Price: ₹{price}</strong>
              <p>Category: {category}</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default ProductDetails
