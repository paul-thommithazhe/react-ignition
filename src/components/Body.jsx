import RestaurantCard from "./Restaurent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResObj, setListOfResObj] = useState([]);
  const [filterObj, setFilterObj] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfResObj(restaurants);
      setFilterObj(restaurants);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = () => {
    const searchTextFilter = listOfResObj.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFilterObj(searchTextFilter);
  };

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
