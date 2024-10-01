import {  useEffect, useState } from "react";
import { useIdStore } from "../../store/store";
import Extranav from "../Extranav/Extranav";
import Nav from "../Nav/Nav";
import Sidebarcomp from "../Sidebar/Sidebar";
import axios from "axios";
import Cookies from 'js-cookie';

const ProductOverview = () => {
  const { productId } = useIdStore();
  const [product, setProduct] = useState();
  

  useEffect(() => {
    const getProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            setProduct(response)
        } catch {
    
        }     
      }

      getProduct();
},[])
console.log(productId)
console.log(product?.data?.thumbnail)
  return (
    <>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav />
        <Nav className />
        <div className="">
          <div>
            <img src={product?.data?.thumbnail} alt="product-image"/>
          </div>
          <div>
            <p>{product?.data?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
