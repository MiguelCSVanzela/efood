import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'

export const ButtonContainer = styled.button<Props>`
  padding: 4px 6px;
  width: ${(props) => (props.theme === 'sky' ? '100%' : 'auto')};
  font-size: 14px;
  color: ${(props) =>
    props.theme === 'sky' ? `${colors.sky}` : `${colors.platium}`};
  background-color: ${(props) =>
    props.theme === 'sky' ? `${colors.platium}` : `${colors.sky}`};
  border: none;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.4s ease;

  &:hover {
    color: ${(props) =>
      props.theme === 'sky' ? `${colors.platium}` : `${colors.sky}`};
    background-color: ${(props) =>
      props.theme === 'sky' ? `${colors.sky}` : `${colors.white}`};
    border-color: ${(props) =>
      props.theme === 'sky' ? `${colors.platium}` : `${colors.sky}`};
    cursor: pointer;
    transform: scale(1.01);
  }
`
