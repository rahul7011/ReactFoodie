//Named Import
import { Img_CDN_Url } from "../config.js";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  //   const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data;
  return (
    <div className="card">
      <img src={Img_CDN_Url + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestrauntCard;
