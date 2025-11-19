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
    <div className="flex border border-gray-300 p-4 rounded gap-4 items-center mb-4">
      <div className="flex-shrink-0">
        <img
          src={`./images/${image}`}
          alt={`${name} property image`}
          className="h-50 w-80 rounded object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between mb-2 items-center">
          <h1 className="font-semibold text-xl truncate">{name}</h1>
          {offer && (
            <p className="bg-red-400 px-2 py-1 rounded text-white font-medium text-sm whitespace-nowrap">
              {offer}
            </p>
          )}
        </div>
        <div className="flex gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center text-yellow-500 gap-1">
              <FaStar />
              <p className="text-gray-600 text-sm">
                {rating} ({reviewCount} Reviews)
              </p>
            </div>
            <p className="font-medium mt-4 truncate">{description}</p>
            <p className="my-2 text-sm text-gray-600 line-clamp-2">{details}</p>
            <button
              onClick={() => onBtnClick(data)}
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded mt-2 cursor-pointer hover:bg-blue-600 transition-colors"
            >
              See availability
            </button>
          </div>
          <div className="flex flex-col items-end text-right justify-end min-w-[120px]">
            {discount && (
              <p className="bg-green-700 text-white font-medium px-2 rounded text-sm mb-1">
                {discount}% off
              </p>
            )}
            <p className="text-sm">
              {rooms} room {nights} days
            </p>
            <div className="text-right">
              <p className="font-semibold text-lg">
                {hasDiscount && (
                  <sup className="text-red-400 text-sm line-through">
                    ${originalPrice}
                  </sup>
                )}{" "}
                ${discountedPrice}
              </p>
            </div>
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
