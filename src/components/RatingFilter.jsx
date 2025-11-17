const RatingFilter = ({ onFilterChange }) => {
  return (
    <div className="border border-gray-300 rounded w-60 my-4">
      <h1 className="border-b border-gray-300 p-2 bg-gray-100 font-medium">
        Rating
      </h1>
      <div className="p-2">
        <p className="text-center text-sm mb-2">Show only ratings more than</p>
        <div className="flex items-center justify-between border border-gray-300 rounded overflow-hidden">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="flex-1 flex items-center justify-center border-r border-gray-300 last:border-r-0"
            >
              <input
                type="radio"
                name="rating"
                id={`rating-${star}`}
                className="peer hidden"
                onChange={() => onFilterChange(star)}
              />
              <label
                htmlFor={`rating-${star}`}
                className="w-full py-2 text-center cursor-pointer peer-checked:bg-blue-100 peer-checked:font-medium"
              >
                {star} ⭐
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;
