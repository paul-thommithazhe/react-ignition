import RestaurantCard from "./Restaurent";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResObj, setListOfResObj] = useState(resObj);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            setListOfResObj(
              listOfResObj.filter((resData) => resData.info.avgRating > 4.6)
            );
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
