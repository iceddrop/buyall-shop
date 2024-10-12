import React from 'react';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductOverview from './components/ProductOverview/ProductOverview';
import CategoryProducts from './pages/CategoryProducts/CategoryProducts';
function App() {
  return (
    <div>
       
      <Routes>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/productoverview' element={<ProductOverview/>}/>
          <Route path='/category' element={<CategoryProducts/>}/>
      </Routes>
      </div>
  )
}

export default App
