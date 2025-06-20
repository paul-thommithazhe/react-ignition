import RestaurantCard from "./Restaurent";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restaurant-container">
        {resObj.map((restaurants, index) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
