import React from 'react';
import Extranav from '../components/Extranav/Extranav';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Categories from '../components/Categories/Categories';
import BestDeals from '../components/BestDeals/BestDeals';
import Brands from '../components/Brands/Brands';
import Pricing from '../components/Pricing/Pricing';
import PopularDeals from '../components/PopularDeals/PopularDeals';
import Cashback from '../components/Cashback/Cashback';
import Todaysdeal from '../components/TodaysDeal/Todaysdeal';
import Refund from '../components/Refund/Refund';
export default function Homepage(){

     return(
      <>
        <Extranav/>
        <Nav/>
        <Home/>
       {/* <Categories/>*/}
        <BestDeals/>
        <Brands/>
        <Pricing/>
        <PopularDeals/>
        <Cashback/>
        <Todaysdeal/>
        <Refund/>
      </> 
     )
}