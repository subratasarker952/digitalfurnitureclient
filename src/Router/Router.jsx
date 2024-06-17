import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import CategoriesProducts from "../Components/HomePageCom/CategoriesProducts";
import AboutUs from "../Components/HomePageCom/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import SingleBlog from "../Pages/Blogs/SingleBlog";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Components/SharedComponent/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UserLayout from "../Layouts/UserLayout";
import MainLayout from "../Layouts/MainLayout";
import DashboardHome from "../Pages/UserPages/DashboardHome";
import Profile from "../Pages/UserPages/Profile/Profile";
import EditProfile from "../Pages/UserPages/Profile/EditProfile";
import MyProducts from "../Pages/UserPages/Products/MyProducts";
import AddProduct from "../Pages/UserPages/Products/AddProduct";
import UpdateProduct from "../Pages/UserPages/Products/UpdateProduct";
import CreateBlog from "../Pages/UserPages/Blogs/CreateBlog";
import MyBlogs from "../Pages/UserPages/Blogs/MyBlogs";
import UpdateBlog from "../Pages/UserPages/Blogs/UpdateBlog";
import AddReview from "../Pages/UserPages/Review/AddReview";
import SingleReview from "../Pages/UserPages/Review/SingleReview";
import UpdateReview from "../Pages/UserPages/Review/UpdateReview";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Products/Product";
import SingleProduct from "../Pages/UserPages/Products/SingleProduct";
import Reviews from "../Pages/Reviews/Reviews";
import MyReviews from "../Pages/UserPages/Review/MyReviews";
import Blog from "../Pages/UserPages/Blogs/Blog";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/products/categories/:category",
        element: <CategoriesProducts />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/products/categories/${params.category}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://digitalfurnitureserver.vercel.app/blogs/${params.id}`),
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/about",
        element: <AboutUs />,
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
          fetch(
            `https://digitalfurnitureserver.vercel.app/users/get/${params.id}`
          ),
      },
      {
        path: "myProducts",
        element: <MyProducts />,
      },
      {
        path: "allProducts/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/products/${params.id}`
          ),
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
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://digitalfurnitureserver.vercel.app/blogs/${params.id}`),
      },
      {
        path: "editBlog/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(`https://digitalfurnitureserver.vercel.app/blogs/${params.id}`),
      },
      {
        path: "createReview",
        element: <AddReview />,
      },
      {
        path: "myReviews",
        element: <MyReviews/>,
      },
      {
        path: "reviews/:id",
        element: <SingleReview />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "reviews/update/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(
            `https://digitalfurnitureserver.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
