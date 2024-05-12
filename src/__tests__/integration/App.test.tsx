import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { describe, test } from "vitest";
import App from "../../App";
import { LocationDisplay, LOCATION_DISPLAY } from "../libs/LocationDisplay";

describe("App routing", () => {
  test("default root", () => {
    render(
      <>
        <App />
        <LocationDisplay />
      </>,
      { wrapper: BrowserRouter },
    );

    // verify page content for default route
    expect(screen.getByText(/you are home/i)).toBeInTheDocument();

    // verify page path redirected from root to home
    expect(screen.getByTestId(LOCATION_DISPLAY)).toHaveTextContent("/home");
  });

  test("navigate from root to about by clicking link", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByRole("link", { name: "About" }));
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
