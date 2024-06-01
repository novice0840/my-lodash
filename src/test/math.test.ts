import { describe, test, expect } from "vitest";
import { add, divide } from "lodash";
import { add as myAdd } from "../lib";

describe("math 메소드", () => {
  test("add", () => {
    const testParams = [
      [1, 2],
      [100, 1],
      [1, 100],
      [-10, 10],
    ];

    testParams.forEach((testParam) => {
      expect(myAdd(testParam[0], testParam[1])).toBe(add(testParam[0], testParam[1]));
    });
  });
});
