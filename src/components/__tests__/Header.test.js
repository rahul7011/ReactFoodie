import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter, staticRouter } from "react-router-dom/server";

//name should be discriptive and what we are expecting
test("logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is loaded

  const logo = header.getAllByTestId("logo");
  //   console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});

test("Cart should be empty initially", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if Cart is Empty

  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart");
});

/**
 * Provider is to support Redux
 * StaticRouter is to support <Link/>
 *
 */
