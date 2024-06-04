import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/reviews`)
      .then((response) => response.json())
      .then((json) => setReviews(json));
  }, [reviews]);
  return (
    <div className="my-10 bg-slate-200">
      <h3 className="text-center text-3xl text-green-500 my-10">Reviews</h3>
      <div className="flex gap-3">
        {reviews.map((review) => (
          <div key={review._id}>
            <div className="w-[500px] min-h-[600px] flex flex-col justify-between rounded-lg  bg-white">
    
            <p>
                <span className="text-5xl text-slate-400">"</span>
                {review?.description}
                <span className="text-5xl text-slate-400">"</span>
              </p>


              <div className="flex justify-center my-10">
                <img
                  src={review?.img}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <p>Name:- {review?.authorName}</p>
                  <p>Email:- {review?.authorEmail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
