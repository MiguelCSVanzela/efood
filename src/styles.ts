import styled, { createGlobalStyle } from "styled-components";

export const color = {
  vermelho: "#E66767",
  branco: "#FFFFFF",
  bege: "#FFEBD9",
  begeClaro: "#FFF8F2",
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    list-style: none;
}

body{
    font-family: Roboto, sans-serif; 
    background-color: ${color.begeClaro}; 
}

.container{
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`;
