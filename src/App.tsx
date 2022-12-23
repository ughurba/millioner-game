import { Main } from "pages/main";
import styled from "styled-components";
import Theme from "theme";

export const Wrapper = styled.div``;
export const Container = styled.div``;
function App() {
  return (
    <Theme>
      <Wrapper>
        <Main />
      </Wrapper>
    </Theme>
  );
}

export default App;
