//Named Import
import { Img_CDN_Url } from "../config.js";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  //   const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;
  return (
    <div className="w-64 h-64 p-2 m-2 shadow-lg break-words hover:border-2 hover:border-red-600 text-center rounded-xl">
      <img src={Img_CDN_Url + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h3 className="text-sm">
        {cuisines.length <= 3
          ? cuisines.join(",")
          : cuisines.slice(0, 3).join(",") +
            (cuisines.length >= 5 ? " ..." : "")}
      </h3>
      {parseFloat(avgRating) < 4.0 ? (
        <h4 className="font-bold text-sm text-yellow-500">{avgRating} stars</h4>
      ) : (
        <h4 className="font-bold text-sm text-green-600">{avgRating} stars</h4>
      )}
    </div>
  );
};
export default RestrauntCard;
