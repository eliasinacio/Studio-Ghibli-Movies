import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { background-color: #efeac2; }

  .App {
    padding: 40px;
    
    font-family: "Work Sans";
    color: #23895d;

    h1 { 
      padding-bottom: 20px;
      color: #6895d8;

      &:hover {
        a { display: contents; }
      } 

      a {
        display: none;
        font-size: 1.6rem;
        font-weight: 600;
        
        text-decoration: none;

        img {
          width: 20px;
          margin-left: 10px;
        }
        &:active {
          color: #23895d;
        }
        &:visited {
          color:  #6895d8;
        }
      }
    }
  }
`
export default GlobalStyle;