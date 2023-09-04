import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.platium};
  color: ${colors.dark};
  padding-top: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  margin: 32px auto;
  gap: 8px;

  img {
    height: 48px;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }

  img:hover {
    background-color: ${colors.sky};
  }
`

export const AppDescrition = styled.p`
  font-size: 32px;
  font-weight: 400px;
  text-align: center;
  margin-bottom: 40px;
`
