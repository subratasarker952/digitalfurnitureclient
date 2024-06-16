import Banner from "../../Components/HomePageCom/Banner";
import Service from "../../Components/HomePageCom/Service";
import ProductCategories from "../../Components/HomePageCom/ProductCategories";
import FeaturedProducts from "../../Components/HomePageCom/FeaturedProducts";
import AboutUs from "../../Components/HomePageCom/AboutUs";
import CallToAction from "../../Components/HomePageCom/CallToAction";
import Blogs from "../../Components/HomePageCom/Blogs";
import Reviews from "../../Components/HomePageCom/Reviews";
import Slider from "../../Components/SharedComponent/Slider";

const Home = () => {
  return (
    <div className="text-center">
      <Banner />
      <Service />
      <ProductCategories />
      <FeaturedProducts />
      <AboutUs />
      <CallToAction />
      <Blogs />
      <Reviews />
      <Slider />
    </div>
  );
};

export default Home;
