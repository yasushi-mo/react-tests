import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { Sum } from "../../pages/Sum";

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

describe("vi.spyOn", () => {
  const cart = {
    getApples: () => 4,
  };

  test("spy method", () => {
    // Define mock method
    const spy = vi.spyOn(cart, "getApples");
    // call mock method
    cart.getApples();
    // check if mock is called
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(4);
  });

  test("overwrite spy method", () => {
    const spy = vi.spyOn(cart, "getApples").mockImplementation(() => 8);
    cart.getApples();
    expect(spy).toHaveReturnedWith(8);
  });
});

describe("vi.mock", () => {
  test("spy module", () => {
    vi.mock("../../libs/calculate", () => {
      return {
        sum: vitest.fn().mockReturnValue(-10),
      };
    });

    render(<Sum num1={1} num2={2} />);
    expect(screen.getByText(`The sum is: -10`)).toBeInTheDocument();
  });
});
