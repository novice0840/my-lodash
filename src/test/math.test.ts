import { describe, test, expect } from "vitest";
import { add, divide, multiply, subtract, ceil, floor, round } from "lodash";
import {
  add as myAdd,
  divide as myDivide,
  multiply as myMultiply,
  subtract as mySubtract,
  ceil as myCeil,
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

  const roundTests: [number, number?][] = [
    [4.006, undefined],
    [6.004, 2],
    [6040, -2],
    [123456789.123456789, 5],
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

  test.only("ceil", () => {
    roundTests.forEach(([n, precision]) => {
      console.log(ceil(n, precision));
      expect(myCeil(n, precision)).toBe(ceil(n, precision));
    });
  });
});
