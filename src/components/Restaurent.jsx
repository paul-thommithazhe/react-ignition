import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="w-[300px] rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-90 duration-200 ">
      <img
        className="h-[180px] w-full object-cover"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg truncate ">{resData.info.name}</h3>
        <h5 className="text-gray-600 text-sm truncate">
          {resData.info.cuisines.join(" , ")}
        </h5>
        <div className="flex justify-between items-center text-sm mt-2 font-medium text-gray-700">
          <span>{resData.info.avgRating} ⭐</span>
          <span>{resData.info.sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
