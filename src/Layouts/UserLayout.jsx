import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  const menu = (
    <>
      <NavLink className=" capitalize btn m-1" to="/">
        Home
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="">
        Dashboard
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="allProducts">
        All Products
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="addProduct">
        Add Product
      </NavLink>
      <NavLink className=" capitalize btn m-1" to="createBlog">
        Post Blog
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
        <div className="w-2/12 bg-slate-300 p-5 h-screen">
          <div className="flex flex-col gap-2">{menu}</div>
        </div>
        <div className="w-10/12">
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
