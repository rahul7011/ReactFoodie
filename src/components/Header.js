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
    </div>
  );
};

//Default export
export default Header; //only one thing can de exported from this method
