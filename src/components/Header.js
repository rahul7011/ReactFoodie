import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../../media/logo.png";
//SPA-> Single Page Application
//<a> tags will make our page reload(Bad flow)

export const Title = () => (
  <a href="/">
    <img src={Logo} alt="MISSING JPG" className="h-28 p-2" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const { user } = useContext(UserContext);
  //Subscribing to the CartSlice
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-300 shadow-lg">
      <Title />
      <div className="nav-items font-bold">
        <ul className="flex py-12">
          <Link to="/">
            <li className="px-4 hover:text-white">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 hover:text-white">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4 hover:text-white">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-4 hover:text-white">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-4 hover:text-white">
              Cart {cartItems.length > 0 ? cartItems.length : ""}
            </li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="px-4 font-bold hover:text-red-600 shadow-xl"
          onClick={() => setIsLoggedIn(false)}
        >
          {user.name} LogOut
        </button>
      ) : (
        <button
          className="px-4 font-bold hover:text-green-600 shadow-xl"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

//Default export
export default Header; //only one thing can de exported from this method
