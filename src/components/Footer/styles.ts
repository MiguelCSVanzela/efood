import styled from "styled-components";

import { color } from "../../styles";
export const Footer = styled.footer`
  background-color: ${color.bege};
  color: ${color.vermelho};
  padding-top: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8px;
  margin: 32px 0 80px;
  max-width: 80px;

  li {
    height: 24px;
  }
`;

export const AppDescrition = styled.p`
  font-size: 10px;
  font-weight: 400px;
  text-align: center;
  margin-bottom: 40px;
`;
