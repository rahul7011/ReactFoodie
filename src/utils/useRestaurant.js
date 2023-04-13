import { useState, useEffect } from "react";
import { Restaurant_CDN_Url } from "../config";

//This will fetch the restaurant and then send it to us
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  //Get data from the API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Restaurant_CDN_Url + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }

  //return restaurant data
  return restaurant;
};

export const useMenu = (restaurant) => {
  // Store the values in an array
  const listOfObjects = Object.values(
    restaurant?.cards[restaurant?.cards.length - 1]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards
  );
  const mainObj = listOfObjects.filter((obj) => {
    if (obj?.card?.card.hasOwnProperty("itemCards")) return obj;
  });
  // console.log(mainObj);

  const filteredRes = [...mainObj];
  return filteredRes;
};

export default useRestaurant;
