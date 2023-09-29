import { describe, expect, test } from "vitest";
import { getBookInRental, setBookInRental } from "../../pages/LocalStorage";

describe("localStorage tests", () => {
  afterEach(() => {
    localStorage.clear();
  });
  test("get a book in rental from localStorage", () => {
    const DUMMY_BOOK_IN_RENTAL = "test book";
    setBookInRental(DUMMY_BOOK_IN_RENTAL);

    expect(getBookInRental()).toBe(DUMMY_BOOK_IN_RENTAL);
  });
});
