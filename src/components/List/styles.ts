import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const ListContainer = styled.div`
  margin-bottom: 120px;
  margin-top: 80px;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    margin-bottom: 90px;
    margin-top: 40px;
    & > div {
      column-gap: 15px;
      row-gap: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 24px;
    & > div {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`
