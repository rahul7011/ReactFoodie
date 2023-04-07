import "@testing-library/jest-dom"; //for toBeInTheDocument()
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { Restaurant_Data } from "../../mocks/restaurantData";
import { StaticRouter } from "react-router-dom/server";

//Mock fetch
global.fetch = jest.fn(() => {
  //Two Promises because our actual fetch has two promises
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurant_Data);
    },
  });
});

test("Shimmer should load on Homepage first", () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);
  const shimmer = body.getByTestId("shimmer");
  //   expect(shimmer.children).toBeInTheDocument();  //Not a good pratice(doesn't give satisfaction)
  expect(shimmer.children.length).toBe(12);
  //   console.log(shimmer);
});

test("Restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");

  //Here we are writing food inside our search input field(mock)
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);
});
