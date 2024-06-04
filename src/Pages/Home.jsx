import { useLoaderData } from "react-router-dom";
import Banner from "../Components/HomePageCom/Banner";
import Service from "../Components/HomePageCom/Service";
import FeaturedProducts from "../Components/HomePageCom/FeaturedProducts";
import ProductCategories from "../Components/HomePageCom/ProductCategories";
import AboutUs from "../Components/HomePageCom/AboutUs";
import CallToAction from "../Components/HomePageCom/CallToAction";
import Blogs from "../Components/HomePageCom/Blogs";
import Reviews from "../Components/HomePageCom/Reviews";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="text-center">
      <Banner />
      <Service />
      <ProductCategories/>
      <FeaturedProducts products={products.slice(0, 3)}/>
      <AboutUs/>
      <CallToAction/>
      <Blogs/>
      <Reviews/>
    </div>
  );
};

export default Home;
