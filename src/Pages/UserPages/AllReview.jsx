import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReviewCard from "./ReviewCard";

const AllReview = () => {
    const {user}=useAuth()
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
  useEffect(() => {
    fetch(`http://localhost:3000/reviews/me/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setReviews(json));
  }, [reviews, user]);
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;