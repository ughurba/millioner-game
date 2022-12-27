import { act, fireEvent, render, screen } from "@testing-library/react";
import { renderComponent } from "helper/renderComponent";
import color from "data/colors.json";

import { CallAFriend } from "./index";

describe("CallAFriend Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  it("Should render CallAFriend component properly", async () => {
    render(renderComponent(<CallAFriend />));
    const callBtn = screen.getByTestId("call-element");
    fireEvent.click(callBtn);
    expect(callBtn).toHaveStyle({ background: color.WRONG });
    expect(callBtn).toHaveAttribute("disabled");
    expect(screen.getByText(/Dostunuza zeng gedir/i)).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText(/cavab/i)).toBeInTheDocument();
  });
});
