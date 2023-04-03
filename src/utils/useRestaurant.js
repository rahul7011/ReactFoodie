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
    // console.log(json.data);
    setRestaurant(json.data);
  }

  //return restaurant data
  return restaurant;
};

export const useUniqueMenu = (restaurant) => {
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
  //   setUniqueValues(uniqueVal);
  //Returing Unique Restaurant Menu Data
  return uniqueValues;
};

export default useRestaurant;