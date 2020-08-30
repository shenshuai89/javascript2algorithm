import letterCombinations from "../src/17letterCombinations";
test("letterCombinations '23'", () => {
  expect(letterCombinations("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});
