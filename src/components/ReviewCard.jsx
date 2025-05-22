const ReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-sm border">
      <div className="card-body w-full">
        <div className="flex items-center py-4 px-6 gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={review.avatar} alt={review.user} />
            </div>
          </div>
          <div>
            <h3 className="font-bold">{review.user}</h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < review.rating ? "text-accent" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3">"{review.comment}"</p>
        <div className="mt-2 flex gap-2">
          <span className="p-2 rounded bg-accent">{review.task}</span>
          <span className="p-2 rounded bg-accent">{review.price}</span>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
