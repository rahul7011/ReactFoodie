import { useParams } from "react-router-dom";
import { Img_CDN_Url, Menu_CDN_Url } from "../config";
import useRestaurant, { useMenu } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemQuantity from "./ItemQuantity";
const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const restaurant = useRestaurant(resId);
  let uniqueValues = null;
  if (restaurant != null) {
    uniqueValues = useMenu(restaurant);
    console.log(uniqueValues);
    console.log(uniqueValues[0].card.card.itemCards);
  }
  const dispatch = useDispatch();
  const addFoodItem = (value) => {
    dispatch(addItem(value));
  };
  return !restaurant && !uniqueValues ? (
    <Shimmer />
  ) : (
    <div>
      <div className="m-2 p-4 text-center bg-yellow-300 flex flex-col md:flex-row">
        <div className="mx-auto md:ml-30 md:mr-5">
          <img
            className="shadow-xl rounded-lg w-80"
            src={
              Menu_CDN_Url +
              restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
        <div className="mx-auto md:ml-40 mt-10">
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
              <p className="mx-5 font-bold text-sm text-orange-500">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating} stars
              </p>
            ) : (
              <p className="mx-5 font-bold text-sm text-green-600">
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
        <ul className="list-disc" data-testid="menu">
          {/* {uniqueValues.map((foodItem) => (
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
          ))} */}
          {uniqueValues.map((uv) => (
            <>
              <h1 className="lg:ml-48 font-bold text-xl text-orange-500">
                {uv.card.card.title}
              </h1>
              {uv.card.card.itemCards.map((foodItem) => (
                <div className="bg-white border-b overflow-hidden mx-auto w-2/3 flex">
                  <div className="p-6 flex-grow">
                    <h2 className="font-bold text-base mb-0">
                      {foodItem.card.info.name}
                    </h2>
                    <h2 className="mb-2 text-base">
                      ₹{foodItem.card.info.price / 100}
                    </h2>
                    <p className="text-gray-500 font-bold text-xs md:text-xs">
                      {foodItem.card.info.description}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="py-8 flex-none text-xs md:text-base h-24 w-28">
                      <img
                        className="rounded-lg shadow-md"
                        src={Img_CDN_Url + (foodItem?.card?.info?.hasOwnProperty('imageId')===false?"2xempty_cart_yfxml0":foodItem.card.info.imageId)}
                      ></img>
                    </div>
                    {/* {console.log(foodItem.card.info)} */}
                    <ItemQuantity obj={foodItem.card.info} />
                  </div>
                </div>
              ))}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
