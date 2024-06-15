import AboutUs from "../../Components/HomePageCom/AboutUs";
import Banner from "../../Components/HomePageCom/Banner";
import CallToAction from "../../Components/HomePageCom/CallToAction";
import ProductCategories from "../../Components/HomePageCom/ProductCategories";
import FeaturedProducts from "../../Components/HomePageCom/FeaturedProducts";
import Reviews from "../../Components/HomePageCom/Reviews";
import Service from "../../Components/HomePageCom/Service";
import Blogs from "../../Components/HomePageCom/Blogs";
import Slider from "../../Components/SharedComponent/Slider";

const Home = () => {
  return (
    <div className="text-center">
      <Banner />
      <Service />
      <ProductCategories />
      <FeaturedProducts/> 
      <AboutUs />
      <CallToAction />
      <Blogs />
      <Reviews />
      <Slider/>
    </div>
  );
};

export default Home;
