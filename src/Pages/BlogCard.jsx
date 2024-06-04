import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, description, img } = blog;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-[300px]">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description.length>50 ? description.slice(0,49)+"...":description }</p>
          <div className="card-actions">
            <Link
              to={`/blogs/${_id}`}
              className="btn btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
