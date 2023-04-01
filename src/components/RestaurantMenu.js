import { useParams } from "react-router-dom";
import { Menu_CDN_Url } from "../config";
import useRestaurant, { useUniqueMenu } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
//useParams:routing parameters(Hooks)
const RestaurantMenu = () => {
  //how to read a dynamic URL params
  const params = useParams(); //it will fetch the id of the current page
  const { resId } = params; //destructring

  //This will fetch all the Menu of the Restaurant
  const restaurant = useRestaurant(resId);

  //here we are filtering all the Unique data out of the Menu of the Restaurant
  let uniqueValues = null;
  if (restaurant != null) {
    uniqueValues = useUniqueMenu(restaurant);
  }

  return !restaurant && !uniqueValues ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <img
          src={
            Menu_CDN_Url +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>

      <div>
        <ul>
          {uniqueValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
