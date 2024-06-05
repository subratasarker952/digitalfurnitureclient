import { CiDeliveryTruck } from "react-icons/ci";

const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="card text-center w-auto ">
        <div className="card-body">
          <div className="m-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Fast Delivery</h2>
          <p>All of orders Fast Delivery</p>
        </div>
      </div>
      <div className="card text-center w-auto">
        <div className="card-body">
          <div className="m-auto" >
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Order Tracking</h2>
          <p>All orders Tracking</p>
        </div>
      </div>
      <div className="card text-center w-auto">
        <div className="card-body">
          <div  className="m-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Secure Payment</h2>
          <p>Your payment must secure</p>
        </div>
      </div>
      <div className="card text-center w-auto">
        <div className="card-body">
          <div className="m-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-2xl">Easy Use</h2>
          <p>Easy to use and simple</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
