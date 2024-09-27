import { useEffect, useState } from "react";
import { useIdStore } from "../../store/store";
import Extranav from "../Extranav/Extranav";
import Nav from "../Nav/Nav";
import Sidebarcomp from "../Sidebar/Sidebar";
import axios from "axios";

const ProductOverview = () => {
  const { productId } = useIdStore();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            console.log(response)
        } catch {
    
        }     
      }

      getProduct();
},[])



  return (
    <>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav />
        <Nav className />
        <div className="">{productId}</div>
      </div>
    </>
  );
};

export default ProductOverview;
