import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  color: ${colors.white};

  & > div {
    background-color: rgba(0, 0, 0, 0.5);
    height: 280px;
    width: 100%;
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 200px;

    & > div {
      height: 200px;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
  font-size: 32px;

  h2:nth-child(1) {
    font-weight: 100;
  }
  h2:nth-child(2) {
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }
`
