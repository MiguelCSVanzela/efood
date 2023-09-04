import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { Props } from '.'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.header<Props>`
  padding: ${(props) => (props.layout === 'home' ? '40px' : '64px')};
  background-color: ${colors.platium};
  .logo {
    height: 100px;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
  }

  .logo:hover {
    background-color: ${colors.sky};
  }

  div {
    display: grid;
    grid-template-columns: ${(props) =>
      props.layout === 'perfil' ? 'repeat(3, 1fr)' : '1fr'};
    text-align: center;
    align-items: center;
  }

  p {
    color: ${colors.sky};
    font-size: 32px;
    font-weight: bolder;
    text-align: center;
    line-height: 42px;
    width: 540px;
    margin: 140px auto 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    background-size: cover;

    p {
      font-size: 32px;
      margin: 50px auto 0;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: ${(props) => (props.layout === 'home' ? '40px' : '30px')};
    background-size: cover;

    p {
      margin: 30px auto 0;
      font-size: 20px;
      width: 250px;
    }
  }
`

export const HeaderLink = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.sky};
  margin: 0 auto;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const Icon = styled.span`
  display: none;
  img {
    height: 20px;
  }
  @media (max-width: ${breakpoints.smart}) {
    display: flex;
    align-self: center;
    margin: 20px;
  }
`

export const Complement = styled.span`
  display: flex;
  text-align: right;

  @media (max-width: ${breakpoints.smart}) {
    display: none;
  }
`
