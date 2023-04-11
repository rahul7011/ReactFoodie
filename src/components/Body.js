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
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(filteredRestaurants);
  }

  //This will determine whether the user is online or not?
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Offline,Check your Internet Connection</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-4 bg-pink-300 my-5">
        <input
          type="text"
          className="rounded-lg m-2 p-1"
          placeholder="Search"
          value={searchTxt}
          data-testid="search-input"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-1 m-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
          onClick={() => {
            const filteredData = filterData(searchTxt, allRestaurants);
            setfilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
