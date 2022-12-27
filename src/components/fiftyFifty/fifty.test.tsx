import { fireEvent, render, screen } from "@testing-library/react";
import { renderComponent } from "helper/renderComponent";
import { FiftyFifty } from "./index";

describe("Fifty Component", () => {
  it("Should render Fifty component properly", () => {
    render(renderComponent(<FiftyFifty />));

    const button = screen.getByTestId("fifty-element");
    fireEvent.click(button);
    expect(button).toHaveStyle({
      background:
        "radial-gradient(at center center, rgb(255, 50, 54) 2%, rgb(142, 0, 0) 100%);",
    });
    expect(button).toHaveAttribute("disabled");
  });
});
