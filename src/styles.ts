import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  forest: '#97D8C4',
  dark: '#2A2D34',
  rose: '#D81159',
  sky: '#118AB2',
  platium: '#E6E8E6'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  smart: '480px'
}

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

body{
    font-family: Roboto, sans-serif;
    background-color: ${colors.dark};
    scroll-behavior: smooth;
}

.logo {
  height: 100px;
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
}


.logo:hover{
  background-color: ${colors.sky};
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }
}
`
