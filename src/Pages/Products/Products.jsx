import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://digitalfurnitureserver.vercel.app/products")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, [products]);
    if(!products)return<h3 className="text-3xl flex justify-center items-center">Loading...</h3>
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {products &&
            products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)}
        </div>
      </div>
    );
  };
  


export default Products;