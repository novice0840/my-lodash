import { describe, test, expect } from "vitest";
import { add, divide, multiply, subtract } from "lodash";
import {
  add as myAdd,
  divide as myDivide,
  multiply as myMultiply,
  subtract as mySubtract,
} from "../lib";

describe("math 메소드", () => {
  const mathOperationTests = [
    [1, 2],
    [100, 1],
    [1, 100],
    [-10, 10],
    [1, 0],
    [0, 1],
  ];

  test("add", () => {
    mathOperationTests.forEach(([augend, addend]) => {
      expect(myAdd(augend, addend)).toBe(add(augend, addend));
    });
  });

  test("divide", () => {
    mathOperationTests.forEach(([dividend, divisor]) => {
      expect(myDivide(dividend, divisor)).toBe(divide(dividend, divisor));
    });
  });

  test("multiply", () => {
    mathOperationTests.forEach(([multiplier, multiplicand]) => {
      expect(myMultiply(multiplier, multiplicand)).toBe(multiply(multiplier, multiplicand));
    });
  });

  test("subtract", () => {
    mathOperationTests.forEach(([minuend, subtrahend]) => {
      expect(mySubtract(minuend, subtrahend)).toBe(subtract(minuend, subtrahend));
    });
  });
});
