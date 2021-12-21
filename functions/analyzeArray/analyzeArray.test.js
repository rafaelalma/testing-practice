import analyzeArray from "./analyzeArray";
const { expect } = require("@jest/globals");

describe("analyzeArray", () => {
  test("should not work with empty arrays", () => {
    expect(() => analyzeArray([]).average()).toThrow(Error);
    expect(() => analyzeArray([]).min()).toThrow(Error);
    expect(() => analyzeArray([]).max()).toThrow(Error);
    expect(() => analyzeArray([]).length()).toThrow(Error);
  });

  test("should calculate length", () => {
    expect(analyzeArray([34, 12]).length()).toBe(2);
  });

  test("should calculate average of whole numbers", () => {
    expect(analyzeArray([1, 3, 7, 1]).average()).toBe(3);
  });

  test("should calculate average of integer numbers", () => {
    expect(analyzeArray([1, -3, -7, 1]).average()).toBe(-2);
  });

  test("should calculate average of float numbers", () => {
    expect(analyzeArray([1.5, -3.5, -7.3, 1.7]).average()).toBeCloseTo(-1.9);
  });

  test("should calculate min of whole numbers", () => {
    expect(analyzeArray([1, 7, 16, 12]).min()).toBe(1);
  });

  test("should calculate min of integer numbers", () => {
    expect(analyzeArray([1, 7, -16, 12]).min()).toBe(-16);
  });

  test("should calculate min of float numbers", () => {
    expect(analyzeArray([1.2, 7.3, -98.15, 12]).min()).toBe(-98.15);
  });

  test("should calculate max of whole numbers", () => {
    expect(analyzeArray([89, 12, 17, 25]).max()).toBe(89);
  });

  test("should calculate max of whole numbers", () => {
    expect(analyzeArray([89, 12, 17, 25]).max()).toBe(89);
  });

  test("should calculate max of integer numbers", () => {
    expect(analyzeArray([-89, -12, -17, 25]).max()).toBe(25);
  });

  test("should calculate max of float numbers", () => {
    expect(analyzeArray([-89.12, 37, -17.13, 25.1]).max()).toBe(37);
  });

  test("should work with strings", () => {
    expect(analyzeArray(["1"]).length()).toBe(1);
    expect(analyzeArray(["34", 12]).average()).toBe(23);
    expect(analyzeArray(["13", 3.2, 16, "24", "2"]).min()).toBe(2);
    expect(analyzeArray(["13", 3.2, 16, "24", "2", 35]).max()).toBe(35);
  });
});
