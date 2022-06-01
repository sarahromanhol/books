import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
  }

  body {
    font-family: 'Heebo', sans-serif;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
  }
`;
