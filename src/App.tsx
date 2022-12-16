import { Provider } from "react-redux";
import { Game } from "./components/game";
import { store } from "store/store";
import styled from "styled-components";
import Theme from "theme";
import { Player } from "components/player";

export const Wrapper = styled.div``;
export const Container = styled.div``;
function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Wrapper>
          <Player />
          <Game />
        </Wrapper>
      </Theme>
    </Provider>
  );
}

export default App;
