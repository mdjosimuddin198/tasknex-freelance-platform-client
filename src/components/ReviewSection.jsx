import ReviewCard from "./ReviewCard";
import reviews from "../review.json";
import Marquee from "react-fast-marquee";

const ReviewSection = () => {
  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;

  return (
    <div className=" mx-auto p-4">
      <h2 className="text-5xl font-bold mb-6 text-center">
        Real Feedback from Happy Clients
      </h2>

      {/* Review Stats */}
      <div className="stats shadow  gap-3 mb-6 bg-base-100">
        <div className="stat">
          <div className="stat-title">Total Reviews</div>
          <div className="stat-value">{reviews.length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Average Rating</div>
          <div className="stat-value">{averageRating.toFixed(1)}</div>
          <div className="stat-desc flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(averageRating)
                    ? "text-accent"
                    : "text-gray-400"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Review Cards */}

      <Marquee pauseOnHover={true}>
        <div className="flex  w-full gap-4 ">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ReviewSection;
