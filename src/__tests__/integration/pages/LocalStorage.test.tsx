import { screen, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import { BOOK_IN_RENTAL_KEY, LocalStorage } from "../../../pages/LocalStorage";
import { setup } from "../../libs/userEvent";

describe("LocalStorage component", () => {
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

  afterEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    localStorage.clear();
  });

  test("should work as expected", async () => {
    const DUMMY_NEW_BOOK = "Test Book Name";
    const { user } = setup(<LocalStorage />);

    expect(
      await screen.findByRole("heading", { name: "Book In Rental" })
    ).toBeInTheDocument();

    expect(await screen.findByText(/Book in rental:/)).toBeInTheDocument();
    expect(await screen.findByText(/none/)).toBeInTheDocument();
    expect(await screen.findByText(/New Book:/)).toBeInTheDocument();

    const input = screen.getByRole("textbox", { name: "New Book:" });
    const button = screen.getByRole("button", { name: "Submit" });

    await user.type(input, DUMMY_NEW_BOOK);
    await user.click(button);

    await waitFor(async () => {
      expect(setItemSpy).toHaveBeenCalledWith(
        BOOK_IN_RENTAL_KEY,
        DUMMY_NEW_BOOK
      );
      expect(getItemSpy).toHaveBeenCalledWith(BOOK_IN_RENTAL_KEY);
    });
    expect(await screen.findByText(/Test Book Name/)).toBeInTheDocument();
  });
});
