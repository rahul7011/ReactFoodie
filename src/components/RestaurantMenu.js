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
  const [uniqueValues, setUniqueValues] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  useEffect(() => {
    if(restaurant!== null)
      getMenuInfo();
  }, [restaurant]);
  function getMenuInfo() {
    // Store the values in an array
    const valuesArray = Object.values(
      Object.fromEntries(
        Object.entries(
          Object.values(
            restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          )
        ).filter(([_, v]) => v != null)
      )
    ).flatMap((x) => {
      if (x?.card?.card?.itemCards != null) {
        return x?.card?.card?.itemCards.map((xx) => xx?.card?.info?.name);
      }
      return [];
    });

    // Store the unique values in a state variable
    const uniqueValues = [...new Set(valuesArray)];
    setUniqueValues(uniqueValues);
  }
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7296171&lng=77.16663129999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    // console.log(json.data);
    setRestaurant(json.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
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
