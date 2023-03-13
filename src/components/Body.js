import { restaurantList } from "../config";
import RestrauntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

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

  // if (filteredRestaurants?.length == 0) {
  //   return <h1>No Restaurant Matched your seach</h1>;
  // }

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
						<Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
            <RestrauntCard {...restaurant.data}  />
						</Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
