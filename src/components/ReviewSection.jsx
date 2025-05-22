import ReviewCard from "./ReviewCard";
import reviews from "../review.json";

const ReviewSection = () => {
  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Client Reviews</h2>

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
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
