import { describe } from "vitest";

const stockBill = {
  type: "apples",
  count: 13,
};

const stockMary = {
  type: "apples",
  count: 13,
};

const stockTom = {
  type: "oranges",
  count: 10,
};

describe("compare toBe and toEqual", () => {
  test("stocks have the same properties and values", () => {
    expect(stockBill).toEqual(stockMary);
  });

  test("stocks don't have the same values", () => {
    expect(stockBill).not.toEqual(stockTom);
  });

  test("stocks are not exactly the same", () => {
    expect(stockBill).not.toBe(stockMary);
  });

  test("stocks are exactly the same", () => {
    const refStock = stockBill;

    expect(stockBill).toBe(stockBill);
    expect(stockBill).toBe(refStock);
  });

  test("stocks have the same value (type: string) judging from toBe", () => {
    expect(stockBill.type).toBe(stockMary.type);
  });
  test("stocks have the same value (type: string) judging from toEqual", () => {
    expect(stockBill.type).toEqual(stockMary.type);
  });

  test("stocks have the same value (count: number) judging from toBe", () => {
    expect(stockBill.count).toBe(stockMary.count);
  });
  test("stocks have the same value (count: number) judging from toEqual", () => {
    expect(stockBill.count).toEqual(stockMary.count);
  });
});
