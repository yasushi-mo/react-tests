import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { LocalStorage } from "../../../pages/LocalStorage";
import { setup } from "../../libs/userEvent";

describe("LocalStorage component", () => {
  test("ui elements and manipulations", async () => {
    const { user } = setup(<LocalStorage />);

    expect(
      await screen.findByRole("heading", { name: "Book In Rental" })
    ).toBeInTheDocument();

    expect(await screen.findByText(/Book in rental:/)).toBeInTheDocument();
    expect(await screen.findByText(/New Book:/)).toBeInTheDocument();

    const input = screen.getByRole("textbox", { name: "New Book:" });
    const button = screen.getByRole("button", { name: "Submit" });

    await user.type(input, "Test Book Name");
    await user.click(button);
  });
});
