import { restaurantList } from "../config";
import RestrauntCard from "./ResturantCard";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

//props - properties
const Body = () => {
  //searchTxt is a local state variable
  const [searchTxt, setSearchInput] = useState(""); //This is a Hook(hooks are just simple js functions) and it is used to create local state variables
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            //e.target.value ==> whatever we write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filtering data based upon the search
            const filteredData = filterData(searchTxt, restaurants);
            // and then update the state-restaurants
            setRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* Usage of props and spread(JS) */}
        {
          //Usage of map is prefered in industry instead of loops or forEach
          restaurants.map((restaurant) => {
            // Never use index as your key
            return (
              <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        }
      </div>
    </>
  );
};

export default Body;
