import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_CDN_Url } from "../config";
import Shimmer from "./Shimmer";
//useParams:routing parameters(Hooks)
const RestaurantMenu = () => {
  //how to read a dynamic URL params
  const params = useParams(); //it will fetch the id of the current page
  const { resId } = params; //destructring
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <img src={Img_CDN_Url + restaurant.cloudinaryImageId} />
        <h2>{restaurant?.name}</h2>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>

      <div >
        <h3>
          {Object.values(restaurant?.menu?.items).map((currMenu) => (
            <li key={currMenu.id}>{currMenu.name}</li>
          ))}
        </h3>
      </div>
    </div>
  );
};
export default RestaurantMenu;
