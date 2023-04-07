import "@testing-library/jest-dom"; //for toBeInTheDocument()
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { Menu_Data } from "../../mocks/restaurantData";
import { StaticRouter } from "react-router-dom/server";

//Mock fetch
global.fetch = jest.fn(() => {
  //Two Promises because our actual fetch has two promises
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Menu_Data);
    },
  });
});

test("Add Items to Cart", async () => {
  const restaurantMenu = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(restaurantMenu.getByTestId("menu")));

  const addBtn = restaurantMenu.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  fireEvent.click(addBtn[2]);
  fireEvent.click(addBtn[3]);
  fireEvent.click(addBtn[4]);
  const cart = restaurantMenu.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart 5");
});
