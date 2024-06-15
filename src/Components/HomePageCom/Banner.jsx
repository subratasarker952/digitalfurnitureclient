import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full mx-12">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to <br /> Digital Furniture
            </h1>
            <p className="mb-5">Thank you for visiting our website.</p>
            <Link to={'/products'} className="btn btn-primary">Products</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
  // https://i.ibb.co/r0QJL7w/doctor-getting-patient-ready-ct-scan.jpg
  // https://i.ibb.co/bg5n8rk/science-laboratory-equipment-test-tube-with-blood-healthcare-development-chemical-dripping-pipe-with.jpg
  // https://i.ibb.co/FKgdsxb/hand-medical-glove-pointing-virtual-screen-medical-technology.jpg