import { describe, expect } from "@jest/globals";
import calculator from "./calculator";

describe("calculator", () => {
  test("should add integers", () => {
    expect(calculator.add(3, 6)).toBe(9);
  });

  test("should subtract integers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("should multiply integers", () => {
    expect(calculator.multiply(10, 3)).toBe(30);
  });

  test("should divide integers", () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });

  test("should add floats", () => {
    expect(calculator.add(1.25, 3.35)).toBeCloseTo(4.6);
  });

  test("should subtract floats", () => {
    expect(calculator.subtract(10.45, 10)).toBeCloseTo(0.45);
  });

  test("should multiply floats", () => {
    expect(calculator.multiply(2.2, 2.2)).toBeCloseTo(4.84);
  });

  test("should divide floats", () => {
    expect(calculator.divide(3.3, 3)).toBeCloseTo(1.1);
  });

  test("should not divide by zero", () => {
    expect(() => calculator.divide(3, 0)).toThrow(Error);
  });

  test("should work with strings", () => {
    expect(calculator.add("1", "2")).toBe(3);
    expect(calculator.subtract("-1", "1")).toBe(-2);
    expect(calculator.multiply(1, "2")).toBe(2);
    expect(calculator.divide("10", 5)).toBe(2);
  });
});
