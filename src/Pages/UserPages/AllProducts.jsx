import { useEffect, useState } from "react";
import ProductCard from "../../Components/HomePageCom/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [products]);
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
