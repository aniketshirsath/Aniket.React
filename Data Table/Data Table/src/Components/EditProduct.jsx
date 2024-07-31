import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const [formdata, setFormdata] = useState({})
  const { id } = useParams()

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    axios.put(`http://localhost:3002/posts/${id}`, formdata)
      .then((res) => alert("data updated!"))
      .catch((err) => console.log(err))
  }

  const getdata = () => {
    axios.get(`http://localhost:3002/posts/${id}`)
      .then((res) => setFormdata(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getdata()
  }, [])

  const { image, title, category, price, description } = formdata

  return (
    <>

      <div className="container-fluid pt-5 d-flex align-items-center justify-content-center min-vh-100">
        <div className="row w-100">
          <div className="col-md-6 offset-md-3">
            <h4 className="text-center mb-4">Update Product</h4>
            <form className="text-center" onSubmit={handlesubmit}>
              <input
                name="image"
                value={image}
                onChange={handlechange}
                type="text"
                className="form-control mb-3"
                placeholder="Image"
              />
              <input
                name="title"
                value={title}
                onChange={handlechange}
                type="text"
                className="form-control mb-3"
                placeholder="Title"
              />
              <select
                name="category"
                value={category}
                onChange={handlechange}
                className="form-control mb-3"
              >
                <option>men's clothing</option>
                <option>jewelry</option>
                <option>electronics</option>
                <option>women's clothing</option>
              </select>
              <input
                name="price"
                value={price}
                onChange={handlechange}
                type="text"
                className="form-control mb-3"
                placeholder="Price"
              />
              <input
                name="description"
                value={description}
                onChange={handlechange}
                type="text"
                className="form-control mb-3"
                placeholder="Description"
              />
              <input type="submit" className="btn btn-primary w-100" value="Update" />
            </form>
          </div>
        </div>
      </div>
      <hr />


    </>
  )
}

export default EditProduct
