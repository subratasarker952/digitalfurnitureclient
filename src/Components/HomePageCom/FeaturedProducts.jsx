import ProductCardUser from "./ProductCardUser";

const FeaturedProducts = ({products}) => {
    return (
        <div>
          <h2 className="text-3xl text-green-500 my-10">Featured Products </h2>
          <div className="flex gap-2 flex-wrap">
            {products.map((p) => (
              <ProductCardUser key={p._id} product={p}></ProductCardUser>
            ))}
          </div>
        </div>
      );
};

export default FeaturedProducts;