import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { describe, test } from "vitest";
import App, { LocationDisplay } from "../../App";

describe("App", () => {
  test("full app rendering/navigating", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    // verify page content for default route
    expect(screen.getByText(/you are home/i));
    expect(screen.getByTestId("home"));

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/you are on the about page/i));
  });

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    // verify navigation to "no match" route
    expect(screen.getByText(/no match/i));
  });

  test("rendering a component that uses useLocation", () => {
    const route = "/some-route";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>
    );

    // verify location display is rendered
    expect(screen.getByTestId("location-display"));
  });
});
