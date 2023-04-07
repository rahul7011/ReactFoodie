import sum from "../sum";
test("Check sum of 2 +ve numbers", () => {
  //every testcase should have a assertion
  expect(sum(2, 5)).toBe(7);
});
