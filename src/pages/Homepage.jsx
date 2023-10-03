import React from 'react';
import Extranav from '../components/Extranav/Extranav';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Categories from '../components/Categories/Categories';
export default function Homepage(){

     return(
      <>
        <Extranav/>
        <Nav/>
        <Home/>
        <Categories/>
      </> 
     )
}