import { Auditoria } from "./index";
import { renderComponent } from "helper/renderComponent";
import color from "data/colors.json";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Auditoria Component", () => {
  it("Should render Auditoria component properly", () => {
    render(renderComponent(<Auditoria />));
    const button = screen.getByTestId("auditoria-element");
    fireEvent.click(button);
    expect(button).toHaveStyle({ background: color.WRONG });
    expect(button).toHaveAttribute("disabled");
  });
  it("Should open varinats", () => {
    render(renderComponent(<Auditoria />));
    const button = screen.getByTestId("auditoria-element");
    fireEvent.click(button);
    expect(screen.getByText(/a/i)).toBeInTheDocument();
    expect(screen.getByText(/b/i)).toBeInTheDocument();
    expect(screen.getByText(/c/i)).toBeInTheDocument();
    expect(screen.getByText(/d/i)).toBeInTheDocument();
  });
});
