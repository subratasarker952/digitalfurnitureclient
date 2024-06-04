import { useLoaderData } from "react-router-dom";
import ProductCardUser from "../Components/HomePageCom/ProductCardUser";

const CategoriesProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className=" grid grid-clos-1 md:grid-cols-3 gap-3">
        {products &&
          products.map((p) => (
            <ProductCardUser key={p._id} product={p}></ProductCardUser>
          ))}
      </div>
    </div>
  );
};

export default CategoriesProducts;
