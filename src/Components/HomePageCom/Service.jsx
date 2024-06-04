import { CiDeliveryTruck } from "react-icons/ci";

const Service = () => {
  return (
    <div className="flex">
      <div className="card text-center w-auto ">
        <div className="card-body">
          <div className="m-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Fast Delivery</h2>
          <p>All orders of $120 or more of eligible</p>
        </div>
      </div>
      <div className="card text-center w-auto">
        <div className="card-body">
          <div className="m-auto" >
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Order Tracking</h2>
          <p>All orders of $120 or more of eligible</p>
        </div>
      </div>
      <div className="card text-center w-auto">
        <div className="card-body">
          <div  className="m-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Secure Payment</h2>
          <p>All orders of $120 or more of eligible</p>
        </div>
      </div>
      <div className="card text-center w-auto">
        <div className="card-body">
          <div className="m-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Easy Use</h2>
          <p>All orders of $120 or more of eligible</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
