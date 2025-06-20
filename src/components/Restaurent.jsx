import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />

      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(" , ")}</h5>
      <h5>{resData.info.avgRating + " Stars"}</h5>
      <h5>{"Delivery in : " + resData.info.sla.deliveryTime + " Minutes"} </h5>
    </div>
  );
};

export default RestaurantCard;
