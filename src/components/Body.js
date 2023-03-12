import { restaurantList } from "../config";
import RestrauntCard from "./ResturantCard";
//Named Import
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js"

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}

//props - properties
const Body = () => {
	const [allRestaurants,setAllRestaurants]=useState([]);
  const [searchTxt, setSearchInput] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

	//useEffect is a hook(function),it takes two paramters:Callback and dependency array
	//if empty dependency array => called once after render
	// if dependency array is[searchTxt] => once after initial render + evertime after re-render(when my searchTxt is updated)
	useEffect(()=>{
		//API call
		getRestaurants();
	},[]);

	async function getRestaurants(){
		const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7296171&lng=77.16663129999999&page_type=DESKTOP_WEB_LISTING");
		const json =await data.json();
		// console.log(json);
		//optional Chaining
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}

	//Conditional Rendering
	//if restaurant is empty ==> load shimmer UI
	//if restaurant has data ==> load actual data

	if(filteredRestaurants?.length==0)
	{
		return <h1>No Restaurant Matched your seach</h1>
	}

  return (allRestaurants.length === 0)?<Shimmer/>:(
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
            //filtering data based upon the search
            const filteredData = filterData(searchTxt, allRestaurants);
            // and then update the state-restaurants
            setfilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* Usage of props and spread(JS) */}
        {
          //Usage of map is prefered in industry instead of loops or forEach
          filteredRestaurants.map((restaurant) => {
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
