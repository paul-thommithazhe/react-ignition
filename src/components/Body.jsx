import RestaurantCard from "./Restaurent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useHomeData from "../utils/useHomeData";

const Body = () => {
  const {
    filterObj,
    handleSearch,
    listOfResObj,
    searchText,
    setSearchText,
    setFilterObj,
  } = useHomeData(); // custom HOOK
  return filterObj.length === 0 ? (
    <div className=" max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-start items-center gap-4 my-5">
        <input
          type="text"
          className="border border-solid border-black rounded-lg px-2 py-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          className="bg-green-300 px-5 py-1 mx-2  rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
        <Shimmer />
      </div>
    </div>
  ) : (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex m-5 ">
        <div className="px-5">
          <input
            type="text"
            className="border border-solid border-black rounded-lg px-2 py-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            className="bg-green-300 px-5 py-1 mx-2  rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="bg-gray-200 px-3 py-1 rounded-lg">
          <button
            onClick={() => {
              const filteredList = listOfResObj.filter(
                (resData) => resData.info.avgRating > 4.4
              );
              setFilterObj(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {filterObj.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
