import capitalize from "./capitalize";
const { expect } = require("@jest/globals");

it("should capitalize all lowercase word", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

it("should capitalize all uppercase word", () => {
  expect(capitalize("HELLO WORLD")).toBe("Hello world");
});

it("should capitalize random case word", () => {
  expect(capitalize("hEllO wOrLD")).toBe("Hello world");
  expect(capitalize("StRingIFy")).toBe("Stringify");
});
