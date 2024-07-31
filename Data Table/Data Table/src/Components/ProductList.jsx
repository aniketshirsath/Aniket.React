import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';

const ProductList = () => {

  const [value, setValue] = useState([]);
  const [category, setCategory] = useState(`men's clothing`);
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const setCategoryData = (e) => {
    setCategory(e.target.value);
  };

  const highToLow = () => {
    setOrder("desc");
  };

  const lowToHigh = () => {
    setOrder("asc");
  };

  const fetchData = () => {
    axios.get(`http://localhost:3002/posts?_page=${page}&_limit=6`, {
      params: {
        _sort: "price",
        _order: order,
        category: category,
        q: searchTerm
      }
    })
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [category, order, page]);

  return (
    <>
      <div className="container-fluid mt-3 pt-5">
        <div className="row m-0">
          <div className="col-10 m-auto">
            <div className="main d-flex" style={{ justifyContent: "space-around", gap:'20px' }}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ width: "35%" }}
              />
              <select className='form-control mb-3 animated-select ms-2' onChange={setCategoryData}>
                <option value="">Select your category</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelry">Jewelry</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
              <div className="div" style={{ display: 'flex', alignContent: 'center', width: '50%' , gap:'20px'}}>
                <button onClick={highToLow} style={{ width: "40%", height: '35px'}} className='btn btn-primary'>High to Low</button>
                <button onClick={lowToHigh} style={{ width: "40%", height: '35px'}} className='btn btn-primary'>Low to High</button>
              </div>
            </div>
            <div className="row pt-5">
              <div className="container">
                <div className="row">
                  {value.map((product) =>
                  (
                    <div key={product.id} className="col-md-4 mb-4">
                      <div className="card h-100">
                        <Link to={`/singlepage/${product.id}`}>
                          <img src={product.image} className="text-center" alt={product.title} />
                        </Link>
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description.substring(0, 50)}</p>
                          <h6>{product.category}</h6>
                          <p className="card-text"><strong>${product.price}</strong></p>
                          <div className="mt-auto">
                            <button className='btn btn-primary me-2'>
                              <Link to={`/editproduct/${product.id}`} className="text-white text-decoration-none">Edit</Link>
                            </button>
                            <DeleteProduct productId={product.id} fetchData={fetchData} />

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='btn btn-primary me-2' disabled={page === 1} onClick={() => setPage(page - 1)} style={{ width: '7%' }}>Prev</button> {page}
          <button className='btn btn-primary ms-2' onClick={() => setPage(page + 1)} style={{ width: '7%' }}>Next</button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
