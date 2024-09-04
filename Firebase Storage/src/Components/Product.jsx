import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
// import './ProductPage.css';


const Product = () => {
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1);
    const [categoryOption, setCategoryOption] = useState(null);
    const [order, setOrder] = useState(null);
    const [search, setSearch] = useState('');

    const getDataFunction = () => {
        axios.get('http://localhost:3000/product', {
            params: {
                _page: page,
                _limit: 5,
                category: categoryOption,
                _sort: 'price',
                _order: order,
            },
        })
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/product/${id}`)
            .then((res) => {
                alert('Data Deleted');
                getDataFunction();
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getDataFunction();
    }, [page, categoryOption, order]);

    return (
        <div className="container">
            <div className="filter-bar">
                <div>
                    <select onChange={(e) => setCategoryOption(e.target.value)}>
                        <option value="">Select Your Category</option>
                        <option value="men's clothing">Men's</option>
                        <option value="women's clothing">Women's</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input type="text" placeholder="Search Here" onChange={(e) => setSearch(e.target.value)} />

                </div>
                <div className="sort-buttons">
                    <button className="low-to-high" onClick={() => setOrder("asc")}>Low To High</button>
                    <button className="high-to-low" onClick={() => setOrder("desc")}>High To Low</button>
                </div>
            </div>

            <div className="product-grid">
                {data.map((el) => (
                    <div className="product-card" key={el.id}>
                        <h3>{el.category}</h3>
                        <Link to={`/singlepage/${el.id}`}>
                            <img src={el.image} alt={el.title} height={200} width={200} />
                        </Link>
                        <h4>{el.title}</h4>
                        <h4>Price: {el.price}</h4>
                        <button className="edit-btn">
                            <Link to={`/edit/${el.id}`} style={{ color: 'white', textDecoration: 'none' }}>Edit</Link>
                        </button>
                        <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>
                <span>{page}</span>
                <button disabled={page === 4} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Product;

