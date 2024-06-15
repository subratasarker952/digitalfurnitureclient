import { useEffect, useState } from "react";
import Slider from "../SharedComponent/Slider";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://digitalfurnitureserver.vercel.app/reviews")
      .then((response) => response.json())
      .then((json) => setReviews(json));
  }, [reviews]);
  return (
    <div className="my-10 bg-slate-200">
      <h3 className="text-center text-3xl text-green-500 py-10">Reviews</h3>
      <div className="">
        <Slider slides={reviews}></Slider>
      </div>
    </div>
  );
};

export default Reviews;
