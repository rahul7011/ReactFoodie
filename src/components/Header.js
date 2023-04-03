import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
//SPA-> Single Page Application
//<a> tags will make our page reload(Bad flow)

export const Title = () => (
  <a href="/">
    <img
      src={require("../../media/logo.png")}
      alt="MISSING JPG"
      className="h-28 p-2"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn]=useAuth();
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
          <li className="px-4 hover:text-white">Cart</li>
          <Link to="/instamart">
            <li className="px-4 hover:text-white">Instamart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="px-4 font-bold hover:text-red-600 shadow-xl" onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button className="px-4 font-bold hover:text-green-600 shadow-xl" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

//Default export
export default Header; //only one thing can de exported from this method
