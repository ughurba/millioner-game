import { render, screen } from "@testing-library/react";

import { Game } from "./index";
import { renderComponent } from "helper/renderComponent";

describe("Game Component", () => {
  it("Should render Game component properly", async () => {
    render(renderComponent(<Game />));
    expect(screen.getByTestId("timer-element")).toBeInTheDocument();
    expect(screen.getByTestId("fifty-element")).toBeInTheDocument();
    expect(screen.getByTestId("call-element")).toBeInTheDocument();
    expect(screen.getByTestId("auditoria-element")).toBeInTheDocument();
    expect(screen.getByTestId("question-element")).toBeInTheDocument();
    expect(await screen.findAllByText(/Bonuslar/i)).toHaveLength(2);
    expect(screen.getByTestId("variants-element")).toBeInTheDocument();
  });
});
