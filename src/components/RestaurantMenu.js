import { useParams } from "react-router-dom";
import { Menu_CDN_Url } from "../config";
import useRestaurant, { useMenu } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const restaurant = useRestaurant(resId);
  console.log(restaurant);
  let uniqueValues = null;
  if (restaurant != null) {
    uniqueValues = useMenu(restaurant);
    {
      const map = new Map();
      uniqueValues = uniqueValues.filter((value) => {
        if (map.has(value.id) == false) {
          map.set(value.id, value);
          return true;
        }
        return false;
      });
    }
  }
  const dispatch = useDispatch();
  const addFoodItem = (value) => {
    dispatch(addItem(value));
  };

  return !restaurant && !uniqueValues ? (
    <Shimmer />
  ) : (
    <div>
      <div className="m-2 p-4 text-center bg-yellow-300 flex">
        <div className="ml-40">
          <img
            className="shadow-xl rounded-lg w-80"
            src={
              Menu_CDN_Url +
              restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
        <div className="ml-40 mt-10">
          <h1 className="p-2 font-bold text-orange-500 text-5xl">
            {restaurant?.cards[0]?.card?.card?.info?.name}
          </h1>
          <div className="flex font-bold text-sm text-gray-900">
            <p className="ml-5 mr-2">
              {restaurant?.cards[0]?.card?.card?.info?.areaName}
            </p>
            <p>| {restaurant?.cards[0]?.card?.card?.info?.city}</p>
          </div>
          <p className="flex flex-row-reverse font-bold text-gray-500">
            {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <div className="flex flex-inline justify-between pt-5">
            {parseFloat(restaurant?.cards[0]?.card?.card?.info?.avgRating) <
            4.0 ? (
              <p className="ml-5 font-bold text-sm text-orange-500">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating} stars
              </p>
            ) : (
              <p className="ml-5 font-bold text-sm text-green-600">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating} stars
              </p>
            )}
            <h3 className="text-gray-900 text-sm font-bold">
              {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-5">
        <h1 className="p-2 font-bold text-lg">Menu</h1>
        <ul className="list-disc" data-testid="menu">
          {uniqueValues.map((foodItem) => (
            <li key={foodItem.id}>
              {foodItem.name}
              <button
                data-testid="addBtn"
                className="rounded-sm p-1 m-1 block bg-yellow-400"
                onClick={() => addFoodItem(foodItem)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
