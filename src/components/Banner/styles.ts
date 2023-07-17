import styled from "styled-components";

import { color } from "../../styles";

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  font-size: 32px;
  color: ${color.branco};

  & > div {
    background-color: rgba(0, 0, 0, 0.5);
    height: 280px;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 32px;

  h2:nth-child(1) {
    font-weight: 100;
  }
  h2:nth-child(2) {
    font-weight: bold;
  }
`;
