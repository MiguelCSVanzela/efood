import styled from "styled-components";

import { Props } from ".";
import { color } from "../../styles";
export const ButtonContainer = styled.button<Props>`
  padding: 4px 6px;
  width: ${(props) => (props.theme === "bege" ? "100%" : "auto")};
  font-size: 14px;
  color: ${(props) =>
    props.theme === "bege" ? `${color.vermelho}` : `${color.bege}`};
  background-color: ${(props) =>
    props.theme === "bege" ? `${color.bege}` : `${color.vermelho}`};
  border: none;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.4s ease;

  &:hover {
    color: ${(props) =>
      props.theme === "bege" ? `${color.bege}` : `${color.vermelho}`};
    background-color: ${(props) =>
      props.theme === "bege" ? `${color.vermelho}` : `${color.branco}`};
    border-color: ${(props) =>
      props.theme === "bege" ? `${color.bege}` : `${color.vermelho}`};
    cursor: pointer;
  }
`;
