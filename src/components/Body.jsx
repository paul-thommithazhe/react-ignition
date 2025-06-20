import RestaurantCard from "./Restaurent";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfResObj, setListOfResObj] = useState([]);
  const [loading, setLoading] = useState(true);
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
          ?.restaurants || []
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="spinner"></div>;
  }
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredList = listOfResObj.filter(
              (resData) => resData.info.avgRating > 4.4
            );
            setListOfResObj(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="restaurant-container">
        {listOfResObj.map((restaurants, index) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
