import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error";
import Contact from "./components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";

const AppLayout = () => {
  return (
    // React.fragement(Component that is exported by react)
    <>
      <Header></Header>
      {/* All the children goes into the Outlet according to the route  */}
      <Outlet />
      <Footer></Footer>
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
        path: "/about",
        element: <About />,
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
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
