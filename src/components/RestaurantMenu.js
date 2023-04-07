import { useParams } from "react-router-dom";
import { Menu_CDN_Url } from "../config";
import useRestaurant, { useMenu } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  //how to read a dynamic URL params
  const params = useParams(); //it will fetch the id of the current page
  const { resId } = params; //destructring

  //This will fetch all the Menu of the Restaurant
  const restaurant = useRestaurant(resId);

  //here we are filtering all the Unique data out of the Menu of the Restaurant
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
  //This will handle our dispatch action(addItem) for cartSlice
  const dispatch = useDispatch();
  const addFoodItem = (value) => {
    //Syntax:dispatch(action(pass the payload))
    dispatch(addItem(value));
  };

  return !restaurant && !uniqueValues ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="m-2 p-4 text-center">
        <h1 className="font-bold">Restaurant id: {resId}</h1>
        <img
          className="shadow-xl rounded-lg"
          src={
            Menu_CDN_Url +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2 className="p-2 font-bold text-pink-600">
          {restaurant?.cards[0]?.card?.card?.info?.name}
        </h2>
        <h3 className="p-1 text-green-600">
          {restaurant?.cards[0]?.card?.card?.info?.avgRating} Stars
        </h3>
        <h3 className="p-1 text-yellow-600">
          {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
      </div>

      <div className="p-5">
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
                {" "}
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
