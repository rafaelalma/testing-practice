import reverseString from "./reverseString";
import { expect } from "@jest/globals";

test("should reverse word", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("should reverse phrase", () => {
  expect(reverseString("Hello world")).toBe("dlrow olleH");
});

test("should reverse phrase with punctuation", () => {
  expect(reverseString("Hello my name is Rafa.")).toBe(
    ".afaR si eman ym olleH"
  );
});
