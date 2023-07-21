import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  white: '#FFFFFF',
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  darkGray: '#4B4B4B',
  darkSalmon: '#A01F1F'
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
    background-color: ${colors.lightBeige};
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
