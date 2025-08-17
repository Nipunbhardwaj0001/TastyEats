import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdrest, setFilteredRest] = useState([]);
  const [loading, setLoading] = useState(true); 

  const resetFilters = () => {
    setFilteredRest(listOfRest);
    setSearchText(""); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  setLoading(true); // start shimmer before fetching

  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.673373592835524&lng=77.47453518211842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  const restaurants =
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const mappedData = restaurants.map((item) => ({
    id: item.info.id,
    restName: item.info.name,
    cuisine: item.info.cuisines.join(", "),
    rating: item.info.avgRating,
    costForTwo: item.info.costForTwo,
    sla: item.info.sla,
    cloudinaryImageId: item.info.cloudinaryImageId,
    area: item.info.areaName || item.info.locality,
  }));

  setListOfRest(mappedData);
  setFilteredRest(mappedData);
  setLoading(false);
};


  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
        <h1 className="text-2xl font-bold text-red-600 animate-pulse">
          🚫 Looks like you are offline!
        </h1>
        <p className="text-gray-600 mt-2">
          Please check your network connection.
        </p>
      </div>
    );

  const filterTopRated = () => {
    const filteredList = listOfRest.filter((res) => res.rating > 4.3);
    setFilteredRest(filteredList);
  };
    if (loading) {
    return <Shimmer />;
  }

  return(
    <div className="body p-6 ">
      {/* 🔍 Search + Filter Section */}
      <div className="filter flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 rounded-xl shadow-md mb-6">
        <div className="search flex items-center gap-2 w-full md:w-2/3">
          <input
            type="text"
            className="flex-1 border border-yellow-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow-md transition-transform cursor-pointer transform hover:scale-105"
            onClick={() => {
              const filterdrest = listOfRest.filter((res) =>
                res.restName.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(filterdrest);
            }}
          >
            🔍 Search
          </button>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">

        <button
          className="px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full shadow-md transition-transform cursor-pointer transform hover:scale-105"
          onClick={resetFilters}
        >
          🔄 Reset
        </button>
      </div>


        <div className="mt-4 md:mt-0">
          <button
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition-transform transform cursor-pointer hover:scale-105"
            onClick={filterTopRated}
          >
            ⭐ Top Rated
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center m-5">
        <p className="text-gray-800 font-medium">
          Found <span >{filterdrest.length}</span> restaurants
        </p>
        <p className="text-gray-600 text-sm">
          Showing {filterdrest.length} of {listOfRest.length} restaurants
        </p>
      </div>


      {/* Restaurant Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterdrest.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="transform hover:scale-105 transition duration-300"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
