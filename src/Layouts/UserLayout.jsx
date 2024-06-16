import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserLayout = () => {
  const { logOutUser } = useAuth();

  const menu = (
    <>
      <NavLink className=" capitalize btn" to="/">
        Home
      </NavLink>
      <NavLink className=" capitalize btn" to="">
        Dashboard
      </NavLink>
      <NavLink className=" capitalize btn" to="profile">
        Profile
      </NavLink>
      <NavLink className=" capitalize btn" to="addProduct">
        Add Product
      </NavLink>
      <NavLink className=" capitalize btn" to="myProducts">
        My Products
      </NavLink>
      <NavLink className=" capitalize btn" to="createBlog">
        Add Blog
      </NavLink>
      <NavLink className=" capitalize btn" to="blogs">
        My Blogs
      </NavLink>
      <NavLink className=" capitalize btn" to="createReview">
        Add Review
      </NavLink>
      <NavLink className=" capitalize btn" to="myReviews">
        My Review
      </NavLink>
    </>
  );
  return (
    <>
      <div className="flex">
        <div className="flex-10 bg-slate-300 h-screen sticky top-0 p-3 m-3">
          <div className="flex flex-col gap-1 ">
            {menu}
            <button
              className=" bg-red-500 btn text-white hover:text-black"
              onClick={() => logOutUser()}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex-1 mx-auto bg-slate-200">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
