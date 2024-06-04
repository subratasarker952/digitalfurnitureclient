import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const SingleBlog = () => {
  const { user } = useAuth();
  const navigate= useNavigate()
  const blog = useLoaderData();
  const { _id, img, title, description, authorEmail, authorName, createAt } =
    blog;
    const handleDelete = (b) => {
        const sure = window.confirm("Are You Sure? Delete " + b?.title);
        if (sure) {
          fetch(`http://localhost:3000/blogs/${b?._id}`, {
            method: "DELETE",
            headers:{
              'content-type':"application/json",
              authorization: `barer ${localStorage.getItem("token")}`,
            }
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                toast.success("Item Deleted");
                navigate('/blogs')
              }
              else if(data.message){
                toast.error(data.message)
              }
            });
        }
      };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div className="p-3 m-3 text-xl flex">
        <div>
          Author:{authorName}, Email:-{authorEmail}, createAt:-{createAt}
        </div>
        {user?.email === authorEmail && (
          <div>
            <Link
              to={`/dashboard/editBlog/${_id}`}
              className="btn bg-green-500 text-white"
            >
              Edit
            </Link>
            <button onClick={handleDelete} className="btn bg-red-500 text-white">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
