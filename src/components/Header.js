import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../media/logo.png";
//SPA-> Single Page Application

export const Title = () => (
  <a href="/">
    <img data-testid="logo" src={Logo} alt="MISSING JPG" className="h-20" />
  </a>
);
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  //Subscribing to the CartSlice
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border ">
      <Title />
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={handleDropDown}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 ml-auto text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-100"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto" id="navbar-default`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <Link to="/">
                <li
                  className="block py-2 pl-3 pr-4 text-white bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white md:dark:text-orange-500"
                  aria-current="page"
                >
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </li>
              </Link>
              <Link to="/cart">
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Cart
                  {cartItems.length > 0 ? (
                    <span className="text-orange-500">
                      {" " + cartItems.length}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </li>
              </Link>
              <Link to="/login">
                <li
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-900 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

//Default export
export default Header; //only one thing can de exported from this method
