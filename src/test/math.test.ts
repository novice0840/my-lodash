import { describe, test, expect } from "vitest";
import { add, divide } from "lodash";
import { add as myAdd, divide as myDivide } from "../lib";

describe("math 메소드", () => {
  test("add", () => {
    const testParams = [
      [1, 2],
      [100, 1],
      [1, 100],
      [-10, 10],
    ];

    testParams.forEach(([augend, addend]) => {
      expect(myAdd(augend, addend)).toBe(add(augend, addend));
    });
  });

  test("divide", () => {
    const testParams = [
      [1, 2],
      [0, 1],
      [1, 0],
      [-10, 1],
      [1, -9991],
      [1234, 5678],
    ];

    testParams.forEach(([dividend, divisor]) => {
      expect(myDivide(dividend, divisor)).toBe(divide(dividend, divisor));
    });
  });
});
