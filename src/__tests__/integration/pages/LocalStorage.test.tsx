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
  });
});
