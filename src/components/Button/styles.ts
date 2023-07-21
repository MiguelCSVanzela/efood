import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'

export const ButtonContainer = styled.button<Props>`
  padding: 4px 6px;
  width: ${(props) => (props.theme === 'beige' ? '100%' : 'auto')};
  font-size: 14px;
  color: ${(props) =>
    props.theme === 'beige' ? `${colors.salmon}` : `${colors.beige}`};
  background-color: ${(props) =>
    props.theme === 'beige' ? `${colors.beige}` : `${colors.salmon}`};
  border: none;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.4s ease;

  &:hover {
    color: ${(props) =>
      props.theme === 'beige' ? `${colors.beige}` : `${colors.salmon}`};
    background-color: ${(props) =>
      props.theme === 'beige' ? `${colors.salmon}` : `${colors.white}`};
    border-color: ${(props) =>
      props.theme === 'beige' ? `${colors.beige}` : `${colors.salmon}`};
    cursor: pointer;
    transform: scale(1.01);
  }
`
