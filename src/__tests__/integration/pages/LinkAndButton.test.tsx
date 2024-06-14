import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { AnchorAndButton } from "../../../pages/AnchorAndButton";

describe("LinkAndButton component", () => {
  test("should work as expected", () => {
    render(<AnchorAndButton />);

    screen.getByRole("link", { name: "Anchor" });
    screen.getByRole("button", { name: "Button" });
  });
});
