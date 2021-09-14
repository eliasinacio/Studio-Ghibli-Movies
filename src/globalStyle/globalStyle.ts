import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    font-family: "Work Sans";
    background-color: #63645E;

    color: #081B1F;

    padding: 40px;
  }
`
export default GlobalStyle;