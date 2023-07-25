import { describe, test } from "vitest";

describe("vi.fn", () => {
  test("spy function no arguments and no returns", () => {
    // Define mock function
    const getApples = vi.fn();
    // call mock function
    getApples();
    // check if mock function is called
    expect(getApples).toHaveBeenCalled();
  });

  test("spy function returns a product", () => {
    const getProduct = vi.fn((product: string) => ({ product }));

    getProduct("apples");

    expect(getProduct).toHaveReturnedWith({ product: "apples" });
  });

  test("spy function returns a number", () => {
    const getApples = vi.fn(() => 0);
    getApples();
    expect(getApples).toHaveReturnedWith(0);

    getApples.mockReturnValueOnce(5);
    getApples();
    expect(getApples).toHaveNthReturnedWith(2, 5);
  });
});
