import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Start } from "./index";

const renderComponent = (props?: Record<string, boolean>) => {
  return render(
    <Provider store={store}>
      <Start
        setStarted={jest.fn()}
        started={{
          gameOver: false,
          startGame: false,
          win: false,
          ...props,
        }}
      />
    </Provider>
  );
};
describe("Start Component", () => {
  it("Should render Start component properly", async () => {
    renderComponent();
    expect(screen.getByText("Millyonçu oynuna xoş gəlmisiniz👋")).toBeInTheDocument();

    const startGameBtn = await screen.findByRole("button", { name: "Başla" });
    expect(startGameBtn).toBeInTheDocument();
  });
  it("Should correctly display the Start component when the user has won the game", async () => {
    renderComponent({ win: true });
    expect(screen.getByText("Təbriklər👏 siz 1000 000 AZN qazandınız🥳")).toBeInTheDocument();

    const startGameBtn = await screen.findByRole("button", { name: "Başla" });
    expect(startGameBtn).toBeInTheDocument();
  });
  it("Should correctly display the Start component when the user has lose the game", async () => {
    renderComponent({ gameOver: true });

    expect(screen.getByText(/Uduzdunuz! qazanılan məbləq/i)).toBeInTheDocument();

    const startGameBtn = await screen.findByRole("button", {name: "Yeniden başla", });
    expect(startGameBtn).toBeInTheDocument();
  });
});
