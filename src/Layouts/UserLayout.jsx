import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserLayout = () => {
  const {logOutUser } = useAuth();

  const menu = (
    <>
      <NavLink className=" capitalize btn m-1" to="/">
        Home
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="">
        Dashboard
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="profile">
        Profile
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="addProduct">
        Add Product
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="allProducts">
        All Products
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="createBlog">
        Post Blog
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="blogs">
        My Blogs
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="createReview">
        Post Review
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="reviews">
        My Review
      </NavLink>
    </>
  );
  return (
    <>
      <div className="flex ">
        <div className="w-2/12 bg-slate-300 p-5 md:p-2 h-screen fixed">
          <div className="flex flex-col gap-1 ">
            {menu}
            <button className="btn bg-red-500 text-white hover:text-black" onClick={() => logOutUser()}>
              Logout
            </button>
          </div>
        </div>
        <div className="w-10/12 ml-[200px]">
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
