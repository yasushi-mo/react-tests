import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { LocalStorage } from "../../../pages/LocalStorage";
import { setup } from "../../libs/userEvent";

describe("LocalStorage component", () => {
  test("ui elements and manipulations", async () => {
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

    expect(await screen.findByText(/Test Book Name/)).toBeInTheDocument();
  });
});
