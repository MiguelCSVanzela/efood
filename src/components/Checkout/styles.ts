import styled from 'styled-components'

import { ButtonContainer } from '../Button/styles'
import { colors } from '../../styles'

type InputGroupType = {
  maxWidth?: string
}

export const Container = styled.div<InputGroupType>`
  color: ${colors.platium};

  ${ButtonContainer} {
    margin-bottom: 0;
    font-size: 14px;
  }

  p {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Card = styled.div`
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  line-height: 18px;
  margin-bottom: 16px;
`

export const Row = styled.div`
  flex: auto;
  display: flex;
  gap: 24px;
`

export const InputGroup = styled.div<InputGroupType>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  margin: 8px 0;
  height: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    width: 100%;
  }

  input {
    margin: 8px 0;
    height: 32px;
    background-color: ${colors.platium};
    border: none;
    padding: 8px;
    font-weight: bold;
    color: ${colors.dark};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
    width: 100%;
    transition: all 0.5s ease;

    &.error {
      background-color: ${colors.rose};
      border: 1px solid ${colors.platium};
      outline: 1px solid ${colors.platium};
      color: ${colors.platium};
    }
  }
`
export const Error = styled.span<InputGroupType>`
  background-color: ${colors.platium};
  color: ${colors.rose};
  padding: 0 2px;
  border-radius: 4px;
  text-align: center;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  display: block;
  margin: 0 auto;
`
export const ButtonNav = styled.a`
  padding: 4px 6px;
  width: 100%;
  display: block;
  text-align: center;
  font-size: 14px;
  color: ${colors.sky};
  background-color: ${colors.platium};
  text-decoration: none;
  font-weight: bolder;
  border: 1px solid transparent;
  transition: all 0.4s ease;
  margin: 8px 0;

  &:hover {
    color: ${colors.platium};
    background-color: ${colors.sky};
    border-color: ${colors.platium};
    cursor: pointer;
    transform: scale(1.01);
  }
`
