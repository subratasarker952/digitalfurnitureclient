import { useLoaderData } from "react-router-dom";
import ProductCardUser from "../Components/HomePageCom/ProductCardUser";

const CategoriesProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {products.map((p) => (
          <ProductCardUser key={p._id} product={p}></ProductCardUser>
        ))}
      </div>
    </div>
  );
};

export default CategoriesProducts;
