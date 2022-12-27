import { Variants } from "./index";
import { renderComponent } from "helper/renderComponent";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Variant Component", () => {
  it("Should render Variant component properly", async () => {
    render(renderComponent(<Variants />));
    const variants = await screen.findAllByTestId("variants");
    expect(variants).toHaveLength(4);
  });
  it("Сheck for buttons", async () => {
    render(renderComponent(<Variants />));
    const variants = await screen.findAllByTestId("variants");
    variants.map((el) => expect(el).not.toHaveAttribute("disabled"));
    fireEvent.click(variants[0]);
    variants.map((el) => expect(el).toHaveAttribute("disabled"));
  });
});
