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
    <div className="search shimmer-wrapper">
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter-search">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="filter-btn">
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

      <div className="restaurant-container">
        {filterObj.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
