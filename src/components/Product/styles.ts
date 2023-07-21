import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  font-size: 14px;
  position: relative;

  .closeIcon {
    position: absolute;
    right: 0;
    top: 0;
    height: 16px;
    width: 16px;
    cursor: pointer;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.8);
    }
  }

  h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
  }
  p {
    margin: 8px 0;
    font-weight: 400;
    line-height: 22px;
  }
  img {
    width: 304px;
    height: 168px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 12px;
    h3 {
      font-size: 18px;
    }
    img {
      width: 330px;
      height: 190px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    h3 {
      font-size: 18px;
    }
    img {
      width: 285px;
      height: 150px;
    }
  }
  @media (max-width: ${breakpoints.smart}) {
    font-size: 12px;
    h3 {
      font-size: 18px;
    }
    img {
      width: 330px;
      height: 180px;
    }
  }
`

export const BtnDetails = styled(ButtonContainer)``

export const Modal = styled.div`
  display: none;

  &.visible {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;

  &::after {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    content: '';
    margin: 0;
  }
  &.invisible {
    display: none;
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.salmon};
  position: relative;
  max-height: 480px;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  color: ${colors.lightBeige};
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .closeIcon2 {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 16px;
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    max-height: 90vh;
    text-align: center;
    img {
      width: 280px;
      height: 280px;
    }
    .closeIcon2 {
      position: absolute;
      top: 0;
      right: 0;
      height: 16px;
      width: 16px;
      margin: 8px;
      display: inline;
    }
  }
`

export const Text = styled.div`
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;

  .closeIcon {
    position: absolute;
    right: 0;
    top: 0;
    height: 16px;
    width: 16px;
    cursor: pointer;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.8);
    }
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
    margin-top: 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 250px;
    justify-content: space-between;

    p {
      font-size: 14px;
      margin: 8px 0;
    }

    ${ButtonContainer} {
      position: absolute;
      bottom: 0px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 90vh;

    .closeIcon {
      display: none;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 8px;
      margin-bottom: 8px;
      margin-top: 8px;
    }
  }
`
