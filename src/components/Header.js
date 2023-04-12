import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../../media/logo.png";
//SPA-> Single Page Application

export const Title = () => (
  <a href="/">
    <img data-testid="logo" src={Logo} alt="MISSING JPG" className="h-20" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const { user } = useContext(UserContext);
  //Subscribing to the CartSlice
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border ">
      <Title />
      <div className="nav-items font-bold">
        <ul className="flex py-6">
          <Link to="/">
            <li className="px-8 hover:text-orange-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-8 hover:text-orange-500">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-8 hover:text-orange-500">Contact</li>
          </Link>
          <Link to="/cart">
            <li data-testid="cart" className="px-8 hover:text-orange-500">
              Cart{cartItems.length > 0 ? " " + cartItems.length : ""}
            </li>
          </Link>

          {isLoggedIn === 1 ? (
            <button
              className="px-8 font-bold hover:text-red-600"
              onClick={() => setIsLoggedIn(0)}
            >
              {user.name} LogOut
            </button>
          ) : (
            <button
              className="px-8 font-bold hover:text-green-600"
              onClick={() => setIsLoggedIn(1)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

//Default export
export default Header; //only one thing can de exported from this method
