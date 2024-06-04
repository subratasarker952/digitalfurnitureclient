import Banner from "../Components/HomePageCom/Banner";
import Service from "../Components/HomePageCom/Service";
import FeaturedProducts from "../Components/HomePageCom/FeaturedProducts";
import ProductCategories from "../Components/HomePageCom/ProductCategories";
import AboutUs from "../Components/HomePageCom/AboutUs";
import CallToAction from "../Components/HomePageCom/CallToAction";
import Blogs from "../Components/HomePageCom/Blogs";
import Reviews from "../Components/HomePageCom/Reviews";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://digitalfurnitureserver.vercel.app/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [products]);

  return (
    <div className="text-center">
      <Banner />
      <Service />
      <ProductCategories />
      <FeaturedProducts products={products.slice(0, 3)} />
      <AboutUs />
      <CallToAction />
      <Blogs />
      <Reviews />
    </div>
  );
};

export default Home;
