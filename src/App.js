import React from "react";
import ReactDom from "react-dom/client";
//Default Import
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";

const AppLayout = () => {
  return (
    // React.fragement(Component that is exported by react)
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
