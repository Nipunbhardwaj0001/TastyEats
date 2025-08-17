import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { restName, cuisine, rating, costForTwo, sla, cloudinaryImageId,area } = resData;

  return (
    <div className="p-4 w-full h-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer flex flex-col">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          className="rounded-2xl w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
          src={CDN_URL + cloudinaryImageId}
          alt={`${restName} logo`}
        />
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-800 truncate">{restName}</h3>
        <h4 className="text-sm text-gray-500 truncate">{cuisine}</h4>
        <p className="text-xs text-gray-400 mt-1">Location: {area}</p>

        {/* Bottom row always aligned */}
        <div className="flex items-center justify-between mt-auto text-sm pt-2">
          <span
            className={`px-2 py-0.5 rounded-full text-white font-medium ${
              rating >= 4 ? "bg-green-500" : rating >= 3 ? "bg-yellow-500" : "bg-red-500"
            }`}
          >
            ⭐ {rating}
          </span>
          <span className="text-gray-600 font-medium">{costForTwo}</span>
          <span className="text-gray-500">{sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
