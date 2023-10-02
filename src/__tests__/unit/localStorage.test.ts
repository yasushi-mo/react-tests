import { describe, expect, test } from "vitest";
import {
  BOOK_IN_RENTAL_KEY,
  getBookInRental,
  setBookInRental,
} from "../../pages/LocalStorage";

describe("localStorage tests", () => {
  const getBookInRentalSpy = vi.spyOn(Storage.prototype, "getItem");

  afterEach(() => {
    getBookInRentalSpy.mockClear();
    localStorage.clear();
  });
  test("get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    setBookInRental(DUMMY_BOOK_IN_RENTAL);

    expect(getBookInRental()).toBe(DUMMY_BOOK_IN_RENTAL);
    expect(getBookInRentalSpy).toHaveBeenCalledWith(BOOK_IN_RENTAL_KEY);
  });
  test("not get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    expect(getBookInRental()).not.toBe(DUMMY_BOOK_IN_RENTAL);
  });
});
