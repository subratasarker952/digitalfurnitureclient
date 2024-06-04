const ProductCardUser = ({ product }) => {
  const { title, price, description, img } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="">
          <img src={img} alt="Shoes" className="rounded-xl w-[280px] h-[280px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price}</h2>
          <p>{description.length>50 ?description.slice(0, 49)+"..": description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Add to cart</button>
            <button className="btn bg-blue-500 text-white">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardUser;
