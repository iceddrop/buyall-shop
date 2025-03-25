import React from "react";
import Extranav from "../components/Extranav/Extranav";
import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";
import BestDeals from "../components/BestDeals/BestDeals";
import Brands from "../components/Brands/Brands";
import Pricing from "../components/Pricing/Pricing";
import PopularDeals from "../components/PopularDeals/PopularDeals";
import Cashback from "../components/Cashback/Cashback";
import Todaysdeal from "../components/TodaysDeal/Todaysdeal";
import Refund from "../components/Refund/Refund";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import Footer from "../components/Footer/Footer";
import Sidebarcomp from "../components/Sidebar/Sidebar";
import useAuth from "../useAuth";
export default function Homepage() {

  return (
    <div>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav />
        <Nav />
        <Home />
        <BestDeals />
        <Brands />
        <Pricing />
        <Cashback />
        <Refund />
        <TrendingProducts />
        <Footer />
      </div>
    </div>
  );
}
