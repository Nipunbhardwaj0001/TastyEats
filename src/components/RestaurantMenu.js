import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants"; 

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  return (
    <div className="text-center">
      {/* ✅ Restaurant Banner */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden my-6">
        <div className="relative">
          {cloudinaryImageId && (
            <div className="h-48 w-full overflow-hidden">
              <img
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          )}
          <div
            className={`p-6 ${
              cloudinaryImageId
                ? "absolute bottom-0 text-white"
                : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            }`}
          >
            <h1 className="text-3xl font-bold">{name}</h1>
            <p
              className={`mt-2 ${
                cloudinaryImageId ? "text-gray-200" : "text-pink-100"
              } font-medium`}
            >
              {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Categories Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

