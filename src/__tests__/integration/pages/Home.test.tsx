import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";
import { Home } from "../../../pages/Home";

describe("Home component", () => {
  test("when authorized", async () => {
    render(<Home authorized={true} />, { wrapper: BrowserRouter });

    expect(screen.getByText(/you are home/i)).toBeInTheDocument();
    expect(screen.getByText(/you are authorized/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("clicked")).toBeInTheDocument();
  });

  test("when not authorized", async () => {
    render(<Home authorized={false} />, { wrapper: BrowserRouter });

    expect(screen.queryByText(/you are authorized/i)).not.toBeInTheDocument();
  });
});
