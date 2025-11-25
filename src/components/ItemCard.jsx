import { FaStar } from "react-icons/fa";

const ItemCard = ({ data, onBtnClick }) => {
  const {
    image,
    name,
    rating,
    reviewCount,
    description,
    details,
    originalPrice,
    discountedPrice,
    discount,
    offer,
    nights,
    rooms,
    includesTax,
  } = data;

  const hasDiscount = discount && originalPrice !== discountedPrice;

  return (
    <div className="flex flex-col md:flex-row border border-gray-300 p-4 rounded-lg gap-4 md:items-start mt-4">
      <div className="w-full md:w-auto">
        <img
          src={`./images/${image}`}
          alt={`${name} property image`}
          className="w-full md:w-60 h-40 md:h-48 rounded object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row justify-between mb-2 md:items-center">
          <h1 className="font-semibold text-lg md:text-xl truncate">{name}</h1>

          {offer && (
            <p className="bg-red-400 px-2 py-1 rounded text-white font-medium text-xs md:text-sm whitespace-nowrap">
              {offer}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center text-yellow-500 gap-1 text-sm">
              <FaStar />
              <p className="text-gray-600">
                {rating} ({reviewCount} Reviews)
              </p>
            </div>

            <p className="font-medium mt-3 text-sm md:text-base truncate">
              {description}
            </p>

            <p className="my-2 text-xs md:text-sm text-gray-600 line-clamp-2">
              {details}
            </p>

            <button
              onClick={() => onBtnClick(data)}
              className="py-2 px-3 md:px-4 bg-blue-500 text-white font-semibold rounded mt-2 text-sm md:text-base hover:bg-blue-600 transition-colors"
            >
              See availability
            </button>
          </div>
          <div className="flex flex-col md:items-end md:text-right md:justify-end">
            {discount && (
              <p className="bg-green-700 text-white font-medium px-2 rounded text-xs md:text-sm w-fit">
                {discount}% off
              </p>
            )}

            <p className="text-xs md:text-sm">
              {rooms} room {nights} days
            </p>

            <p className="font-semibold text-lg md:text-xl">
              {hasDiscount && (
                <sup className="text-red-400 text-xs md:text-sm line-through">
                  ${originalPrice}
                </sup>
              )}{" "}
              ${discountedPrice}
            </p>

            {includesTax && (
              <p className="text-xs text-gray-500 whitespace-nowrap">
                Includes taxes and fees
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
