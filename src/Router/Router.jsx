import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SingleProduct from "../Pages/UserPages/Products/SingleProduct";
import CategoriesProducts from "../Components/HomePageCom/CategoriesProducts";
import AboutUs from "../Components/HomePageCom/AboutUs";
import Contact from "../Pages/Contact/Contact";
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
import AllProducts from "../Pages/UserPages/Products/AllProducts";
import AddProduct from "../Pages/UserPages/Products/AddProduct";
import UpdateProduct from "../Pages/UserPages/Products/UpdateProduct";
import CreateBlog from "../Pages/UserPages/Blogs/CreateBlog";
import MyBlogs from "../Pages/UserPages/Blogs/MyBlogs";
import UpdateBlog from "../Pages/UserPages/Blogs/UpdateBlog";
import CreateReview from "../Pages/UserPages/Review/CreateReview";
import AllReview from "../Pages/UserPages/Review/AllReview";
import SingleReview from "../Pages/UserPages/Review/SingleReview";
import UpdateReview from "../Pages/UserPages/Review/UpdateReview";

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
        element: <AboutUs />,
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
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/blogs/${params.id}`),
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
        element: <DashboardHome/>,
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
        path: "editBlog/:id",
        element: < UpdateBlog/>,
        loader: ({ params }) => 
          fetch(`https://digitalfurnitureserver.vercel.app/blogs/${params.id}`),
      },
      {
        path: "createReview",
        element: <CreateReview/>,
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
        element: <UpdateReview/>,
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
