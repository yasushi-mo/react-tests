import { describe, expect, test } from "vitest";
import {
  BOOK_IN_RENTAL_KEY,
  getBookInRental,
  setBookInRental,
} from "../../pages/LocalStorage";

describe("localStorage tests", () => {
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

  afterEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    localStorage.clear();
  });
  test("set and get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";

    setBookInRental(DUMMY_BOOK_IN_RENTAL);
    expect(setItemSpy).toHaveBeenCalledWith(
      BOOK_IN_RENTAL_KEY,
      DUMMY_BOOK_IN_RENTAL
    );

    expect(getBookInRental()).toBe(DUMMY_BOOK_IN_RENTAL);
    expect(getItemSpy).toHaveBeenCalledWith(BOOK_IN_RENTAL_KEY);
  });
  test("not get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    expect(getBookInRental()).not.toBe(DUMMY_BOOK_IN_RENTAL);
    expect(getItemSpy).toHaveBeenCalledWith(BOOK_IN_RENTAL_KEY);
  });
});
