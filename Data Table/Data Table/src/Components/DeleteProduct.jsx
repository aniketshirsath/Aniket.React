import React from 'react';
import axios from 'axios';

const DeleteProduct = ({ productId, fetchData }) => {

  const handleDelete = () => {
    axios.delete(`http://localhost:3002/posts/${productId}`)
      .then(() => {
        alert("This Product Has Been Deleted!");
        fetchData(); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
  );
};

export default DeleteProduct;
