import { useEffect, useState } from "react";
import Navigation from "../components/navbar";
import axios from "axios";
import Productscard from "./productscard";
import "./productspage.css"
const Productspage = () => {
  const [product, setproduct] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setproduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching PRoducts:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navigation />
<h1 style={{textAlign:"center"}}>Products</h1>
      <div className="Products-container">


      {product && product.map((productData, index) => (
        <Productscard key={index} product={productData} />
      ))}




      </div>
    </div>
  );
};
export default Productspage;
