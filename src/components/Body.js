import { restaurantList } from "../config";
import RestrauntCard from "./ResturantCard";

//props - properties
const Body = () => (
  <div className="restaurant-list">
    {/* Usage of props and spread(JS) */}
    {
      //Usage of map is prefered in industry instead of loops or forEach
      restaurantList.map((restaurant) => {
        // Never use index as your key
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })
    }
  </div>
);

export default Body;
