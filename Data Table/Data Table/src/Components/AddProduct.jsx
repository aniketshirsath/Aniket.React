import axios from 'axios';
import React, { useState } from 'react';

const intialvalue = {
  image: '',
  title: '',
  category: '',
  price: '',
  description: ''

}

const AddProduct = () => {
  const [formdata, setformdata] = useState(intialvalue)


  const handlechange = (e) => {

    setformdata({ ...formdata, [e.target.name]: e.target.value })

  }

  const { image, title, category, price, description } = formdata

  const handlesubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3002/posts", formdata).
      then((res) =>
        console.log(res)).catch((Error) => console.log(Error))

  }


  return (
    <>
      <div className="container-fluid pt-5 d-flex align-items-center justify-content-center min-vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6">
            <h4 className="text-center mb-4 animate-title">Add Product</h4>
            <form className="form-group text-center animate-form" onSubmit={handlesubmit}>
              <input
                className="form-control mb-3"
                type="text"
                name="image"
                value={image}
                placeholder="Image"
                onChange={handlechange}
              />
              <input
                className="form-control mb-3"
                type="text"
                name="title"
                value={title}
                placeholder="Title"
                onChange={handlechange}
              />
              <select
                name="category"
                value={category}
                className="form-control mb-3"
                onChange={handlechange}
              >
                <option value="">Select your category</option>
                <option value="mens clothing">Men's Clothing</option>
                <option value="womens clothing">Women's Clothing</option>
                <option value="jewelry">Jewelry</option>
                <option value="electronics">Electronics</option>
              </select>
              <input
                className="form-control mb-3"
                type="text"
                name="price"
                value={price}
                placeholder="Price"
                onChange={handlechange}
              />
              <input
                className="form-control mb-3"
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                onChange={handlechange}
              />
              <input type="submit" className="btn btn-primary w-100" value="Add Product" />
            </form>
            <hr />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default AddProduct;
