import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchInput] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7296171&lng=77.16663129999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(searchTxt, allRestaurants);
            setfilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
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
