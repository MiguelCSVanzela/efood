import styled from "styled-components";

import { color } from "../../styles";
import { ButtonContainer } from "../Button/styles";
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
  position: absolute;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.visible {
    display: flex;
  }
`;

export const SideBar = styled.aside`
  z-index: 1;
  background-color: ${color.vermelho};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    font-size: 20px;
  }
`;

export const CartItem = styled.li`
  max-width: 340px;
  width: 100%;
  padding: 8px;
  display: flex;
  background-color: ${color.bege};
  color: ${color.vermelho};
  position: relative;
  margin-bottom: 16px;
  img {
    height: 90px;
    width: 90px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  margin-left: 8px;
  img {
    height: 24px;
    width: 24px;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 8px;
    transition: transform 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: rotateY(360deg);
    }
  }
  h3 {
    font-weight: bolder;
    font-size: 18px;
    margin-bottom: 16px;
    display: block;
  }
  span {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Total = styled.div`
  margin: 40px 0 16px;
  color: ${color.bege};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
