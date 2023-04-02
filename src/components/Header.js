import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
//SPA-> Single Page Application
//<a> tags will make our page reload(Bad flow)

export const Title = () => (
  <a href="/">
    <img
      src={require("../../media/logo.png")}
      alt="MISSING JPG"
      className="logo"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn]=useAuth();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

//Default export
export default Header; //only one thing can de exported from this method
