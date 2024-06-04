import ProductCardUser from "./ProductCardUser";

const FeaturedProducts = ({products}) => {
    return (
        <div>
          <h2 className="text-3xl text-green-500 my-10">Featured Products </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {products && products.map((p) => (
              <ProductCardUser key={p._id} product={p}></ProductCardUser>
            ))}
          </div>
        </div>
      );
};

export default FeaturedProducts;