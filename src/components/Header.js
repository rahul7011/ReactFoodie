import { useState } from "react";

const loggedInUser = () => {
  setIsLoggedIn(true);
};

//Named Export
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
