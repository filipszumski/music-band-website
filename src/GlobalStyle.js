import { createGlobalStyle } from "styled-components";
import background from "./images/Fisz-Emade-Tworzywo_Juwenalia-UKSW_2017-05-26_21-06-20.jpg"

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
}

#root {
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: transparent;
}
`;