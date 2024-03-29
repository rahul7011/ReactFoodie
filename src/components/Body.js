import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { All_Restaurant_Url } from "../config";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchInput] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(All_Restaurant_Url);
    const json = await data.json();
    // console.log(json);
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //This will determine whether the user is online or not?
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Offline,Check your Internet Connection</h1>;
  }
  return allRestaurants == null || allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* {console.log(allRestaurants)} */}
      <div className="p-4 my-5 text-center">
        <input
          type="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Type to Search"
          value={searchTxt}
          data-testid="search-input"
          onChange={(e) => {
            {
              setSearchInput(e.target.value);
              e.target.value !== ""
                ? setfilteredRestaurants(filterData(searchTxt, allRestaurants))
                : setfilteredRestaurants(allRestaurants);
            }
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center " data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrauntCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
