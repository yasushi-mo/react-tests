import { describe, expect, test } from "vitest";
import { getBookInRental, setBookInRental } from "../../pages/LocalStorage";

describe("localStorage tests", () => {
  test("get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    setBookInRental(DUMMY_BOOK_IN_RENTAL);

    expect(getBookInRental()).toBe(DUMMY_BOOK_IN_RENTAL);
  });
  test("get a book in rental from localStorage without setting it", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    expect(getBookInRental()).toBe(DUMMY_BOOK_IN_RENTAL);
  });
});
