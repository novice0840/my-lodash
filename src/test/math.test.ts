import { add as myAdd } from "../lib";
import { add } from "lodash";

import { describe, test, expect } from "vitest";

describe("sample test", () => {
  test("it", () => {
    expect(myAdd(1, 2)).toBe(3);
  });
});
