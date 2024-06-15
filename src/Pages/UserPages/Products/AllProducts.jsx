import { useEffect, useState } from "react";
import ProductCard from "../../../Components/SharedComponent/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://digitalfurnitureserver.vercel.app/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [products]);
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {products && products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
