import Footer from "../Footer";
import { render } from "@testing-library/react";

test("Footer should be present when my application renders", () => {
  const footer = render(<Footer />);
  const footer_detail = footer.getByTestId("footer-detail");
  expect(footer_detail.innerHTML).toBe(
    //initially the data is dummy which later gets updated to newUser
    "This site is developed by Dummy Name - dummy@fake.com"
  );
});
