import styled from "styled-components";

import { breakpoints, color } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const ItemContainer = styled.div`
  border: 1px solid ${color.vermelho};
  color: ${color.vermelho};
  position: relative;
  background-color: ${color.branco};

  > img {
    width: 480px;
    height: 217px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    > img {
      width: 300px;
      height: 150px;
      object-fit: cover;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    > img {
      width: 340px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const Content = styled.div`
  padding: 8px;

  p {
    margin: 16px 0 48px;
    font-size: 14px;
  }
  ${ButtonContainer} {
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 6px;
    font-size: 12px;
    p {
      margin: 14px 0 40px;
    }
    ${ButtonContainer} {
      bottom: 8px;
    }
  }
`;

export const Tags = styled.div`
  top: 8px;
  right: 16px;
  position: absolute;
`;

export const HeaderItem = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
  font-weight: bolder;
  span {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
    line-height: 20px;

    span {
      font-size: 20px;
      img {
        height: 18px;
        width: 18px;
      }
    }
  }
`;
