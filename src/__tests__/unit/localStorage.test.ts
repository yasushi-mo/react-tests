import { describe, expect, test } from "vitest";
import { BOOK_IN_RENTAL_KEY, getBookInRental } from "../../pages/LocalStorage";

describe("localStorage mock", () => {
  test("get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    localStorage.setItem(BOOK_IN_RENTAL_KEY, DUMMY_BOOK_IN_RENTAL);

    expect(getBookInRental()).toBe(DUMMY_BOOK_IN_RENTAL);
  });
});
