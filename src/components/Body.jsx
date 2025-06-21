import RestaurantCard from "./Restaurent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResObj, setListOfResObj] = useState([]);
  const [filterObj, setFilterObj] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfResObj(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterObj(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log(e);
    }
  };
  return filterObj.length === 0 ? (
    <div>
      
      
       <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchTextFilter = listOfResObj.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase());
              });
              setFilterObj(searchTextFilter);
            }}
          >
            Search
          </button>
           <Shimmer />
        </div> </div>
   
  ) : (
    <div className="body">
      <div className="filter-search">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchTextFilter = listOfResObj.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase());
              });
              setFilterObj(searchTextFilter);
            }}
          >
            Search
          </button>
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
            Top Rated Restaurents
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filterObj.map((restaurants, index) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
