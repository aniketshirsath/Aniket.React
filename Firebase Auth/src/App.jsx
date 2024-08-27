import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Allroutes from './Components/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Allroutes/>
    </BrowserRouter>
  )
}

export default App
