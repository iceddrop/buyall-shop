import React from 'react';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div>
       
      <Routes>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
  )
}

export default App
