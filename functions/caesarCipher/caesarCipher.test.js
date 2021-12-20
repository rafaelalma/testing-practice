import caesarCipher from "./caesarCipher";
const { expect } = require("@jest/globals");

describe("caesarCipher", () => {
  test("should work with empty strings", () => {
    expect(caesarCipher("", 1)).toBe("");
  });

  test("should throw error without shift value", () => {
    expect(() => caesarCipher("test")).toThrow(Error);
  });

  test("should encrypt all lowercase word", () => {
    expect(caesarCipher("attack", 5)).toBe("fyyfhp");
  });

  test("should encrypt all uppercase word", () => {
    expect(caesarCipher("DEFEND", 7)).toBe("klmluk");
  });

  test("should encrypt mixed case word", () => {
    expect(caesarCipher("AvaDA kEdabRA", 25)).toBe("zuzcz jdczaqz");
  });

  test("should only encrypt letters", () => {
    expect(caesarCipher("123abc!.,", 9)).toBe("123jkl!.,");
  });

  test("should wrap from z to a", () => {
    expect(caesarCipher("zap", 3)).toBe("cds");
  });
});
