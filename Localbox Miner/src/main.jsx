import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextFun } from './context/Context.jsx'
// import { AuthContextProviderFun } from './context/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthContextProviderFun>
  <ThemeContextFun>
    <App />
  </ThemeContextFun>
  // </AuthContextProviderFun>,
)
