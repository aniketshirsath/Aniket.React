import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

  const initialValue = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  };

  const [formData, setFormData] = useState(initialValue);
  const { title, price, category, description, image } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/product", formData)
      .then((res) => {
        console.log(res.data);
        alert("Data Added");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h1>Welcome to AddProduct Page</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          name='image'
          value={image}
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          name='title'
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
        />
        <select
          name='category'
          value={category}
          onChange={handleChange}
        >
          <option value="">Select Your Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          name='price'
          value={price}
          onChange={handleChange}
          type="text"
          placeholder="Price"
        />
        <input
          name='description'
          value={description}
          onChange={handleChange}
          type="text"
          placeholder="Description"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
