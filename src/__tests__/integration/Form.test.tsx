import { screen, waitFor } from "@testing-library/react";
import { Form } from "../../pages/Form";
import { setup } from "../libs/userEvent";

describe("Form", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const setupForm = () => {
    const { user } = setup(<Form />);

    const onSubmit = async () => {
      await user.click(screen.getByRole("button", { name: "Submit" }));
    };

    const typeName = async (value: string) => {
      await user.type(screen.getByRole("textbox", { name: "Name" }), value);
    };

    return { onSubmit, typeName };
  };

  test("Get name value onSubmit", async () => {
    window.alert = vitest.fn();
    const { onSubmit, typeName } = setupForm();

    await typeName("Tom");
    await onSubmit();

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith({
        name: "Tom",
      });
    });
  });
});
