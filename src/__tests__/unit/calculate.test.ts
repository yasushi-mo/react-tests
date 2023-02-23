import { describe, expect, it } from "vitest";
import { calculate } from "../../calculate";

describe("calculate", () => {
  it("1 + 1 = 2", () => {
    const result = calculate(1, 1);
    expect(result).toBe(2);
  });
});
