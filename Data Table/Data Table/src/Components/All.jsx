import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';
import '../App.css'

const All = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-dark" style={{display:'flex', textDecoration:'none', color:'black', alignItems:'center'}}>
                    <ul className='container d-flex list-unstyled w-100' style={{ justifyContent: "space-around"}}>
                        <Link style={{ textDecoration: "none" }} to={"/"}> <li>Description</li></Link>
                        <Link style={{ textDecoration: "none" }} to={"/list"}> <li>Product</li></Link>
                        <Link style={{ textDecoration: "none" }} to={"/editproduct"}> <li>Edit</li></Link>
                        <Link style={{ textDecoration: "none" }} to={"/addproduct"}> <li>Add Product</li></Link>

                    </ul>
                </div>

                <Routes>
                    <Route path="/singlepage/:id" element={<ProductDetails />}></Route>
                    <Route path="/list" element={<ProductList />}></Route>
                    <Route path="/editproduct/:id" element={<EditProduct />}></Route>
                    <Route path="/addproduct" element={<AddProduct />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default All;
