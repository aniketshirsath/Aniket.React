import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DescriptionPage from './Description'
import EditPage from './EditPage'
import Product from './Product'
import AddProduct from './AddProduct'
import Login from '../Pages/Login'
import SignUp from '../Pages/Signup'
import PrivatePage from './Privatepage'

const AllRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage/:id" element={<DescriptionPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/product" element={
          <PrivatePage>
            <Product />
          </PrivatePage>
          } />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default AllRouter
