import styled from "styled-components";
import { color } from "../../styles";
import { ButtonContainer } from "../Button/styles";
import Button from "../Button";

export const Container = styled.div`
  background-color: ${color.vermelho};
  color: ${color.bege};
  padding: 8px;
  font-size: 14px;

  h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
  }
  p {
    margin: 8px 0;
    font-weight: 400px;
    line-height: 22px;
  }
  img {
    width: 304px;
    height: 168px;
    object-fit: cover;
    display: block;
  }
`;

export const BtnDetails = styled(ButtonContainer)``;

export const Modal = styled.div`
  display: none;

  &.visible {
    display: flex;
  }
`;

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
    content: "";
  }
  &.invisible {
    display: none;
  }
`;

export const ModalContent = styled.div`
  background-color: ${color.vermelho};
  position: relative;
  max-height: 480px;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  color: ${color.begeClaro};
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;

  img {
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
`;
