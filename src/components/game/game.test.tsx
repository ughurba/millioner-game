import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store/store";
import Theme from "theme";
import { Game } from "./index";

describe("Game Component", () => {
  it("Should render Game component properly", async () => {
    render(
      <Provider store={store}>
        <Theme>
          <Game />
        </Theme>
      </Provider>
    );
    expect(screen.getByTestId("timer-element")).toBeInTheDocument();
    expect(screen.getByTestId("fifty-element")).toBeInTheDocument();
    expect(screen.getByTestId("call-element")).toBeInTheDocument();
    expect(screen.getByTestId("auditoria-element")).toBeInTheDocument();
    expect(screen.getByTestId("question-element")).toBeInTheDocument();
    expect(await screen.findAllByText(/Bonuslar/i)).toHaveLength(2);
    expect(screen.getByTestId("variants-element")).toBeInTheDocument();
  });
});
