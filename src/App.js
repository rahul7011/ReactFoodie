import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import Error from "./components/Error";
import Contact from "./components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Profile from "./components/Profile.js"; //functional component
import Profile from "./components/ProfileClass.js"; //Class based component
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import Store from "./utils/Store.js";
import Cart from "./components/Cart.js";

const About = lazy(() => import("./components/About")); //this will create chunks

const AppLayout = () => {
  //Dynamic data that we can change using useEffect
  const [user, setUser] = useState({
    //These values will override the default values that we had provided in (UserContext.js)
    user: {
      name: "New User Name",
      email: "newUser@fake.com",
    },
  });
  return (
    // React.fragement(Component that is exported by react)
    <>
    {/* This will provide Redux Store to our whole App */}
      <Provider store={Store}>
        {/* If we want our data to be dyanmic(it will modify according to our useEffect(if used in future with data)) */}
        <UserContext.Provider value={user}>
          <Header></Header>
          {/* All the children goes into the Outlet according to the route  */}
          <Outlet />
          <Footer></Footer>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

//Always create it below AppLayout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, //our own custom error page
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        //Nested Routing
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            //  path:"/profile", if I write this then it would be localhost:1234/profile
            path: "profile", //if I write this then it would be localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      //Dynamic Segments (also called as dynamic routing)
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
