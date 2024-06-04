import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import UserLayout from "../Layouts/UserLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs";
import DashboardHome from "../Pages/UserPages/DashboardHome";
import SingleProduct from "../Pages/SingleProduct";
import AllProducts from "../Pages/UserPages/AllProducts";
import AddProduct from "../Pages/UserPages/AddProduct";
import UpdateProduct from "../Pages/UserPages/UpdateProduct";
import EditProfile from "../Pages/UserPages/EditProfile";
import CategoriesProducts from "../Pages/CategoriesProducts";
import Profile from "../Pages/UserPages/Profile";
import CreateBlog from "../Pages/UserPages/CreateBlog";
import SingleBlog from "../Pages/SingleBlog";
import CreateReview from "../Pages/UserPages/CreateReview";
import SingleReview from "../Pages/UserPages/SingleReview";
import AllReview from "../Pages/UserPages/AllReview";
import UpdateReview from "../Pages/UserPages/UpdateReview";
import MyBlogs from "../Pages/UserPages/MyBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/products/${params.id}`),
      },
      {
        path: "/products/categories/:category",
        element: <CategoriesProducts />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/products/categories/${params.category}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <UserLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editProfile/:id",
        element: <EditProfile />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/users/get/${params.id}`),
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "allProducts/:id",
        element: <SingleProduct />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/products/${params.id}`),
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/products/${params.id}`),
      },
      {
        path: "createBlog",
        element: <CreateBlog />,
      },
      {
        path: "blogs",
        element: <MyBlogs />,
      },
      {
        path: "blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/blogs/${params.id}`),
      },
      {
        path: "createReview",
        element: <CreateReview />,
      },
      {
        path: "reviews",
        element: <AllReview />,
      },
      {
        path: "reviews/:id",
        element: <SingleReview />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/reviews/${params.id}`),
      },
      {
        path: "reviews/update/:id",
        element: <UpdateReview />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/reviews/${params.id}`),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
