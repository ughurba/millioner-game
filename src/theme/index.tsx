import { createGlobalStyle } from "styled-components";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { FC, ReactNode } from "react";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0 ;
  padding: 0;
  color: white;

}
`;

const theme = {
  colors: {
    lightGray: "#e2e2e2",
    background: "radial-gradient(ellipse at center, #2226a3 7%,#060a6d 100%)",
    red: "radial-gradient(at center center, rgb(255, 50, 54) 2%, rgb(142, 0, 0) 100%);",
  },
  clipPath: " polygon(11% 20%, 88% 20%, 100% 50%, 88% 73%, 11% 74%, 0% 50%)",

  fontStyle: {
    size: {
      small: "12px",
      xSmall: "14px",
      medium: "16px",
      large: "24px",
      xxLarge: "48px",
    },
  },
};
export type Theme = typeof theme;

interface Props {
  children: ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Theme;
