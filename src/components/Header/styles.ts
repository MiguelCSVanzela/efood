import styled from "styled-components";

import { color } from "../../styles";
import { Props } from ".";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header<Props>`
  padding: ${(props) => (props.layout === "home" ? "40px" : "64px")};

  div {
    display: grid;
    grid-template-columns: ${(props) =>
      props.layout === "perfil" ? "repeat(3, 1fr)" : "1fr"};
    text-align: center;
    align-items: center;
  }
  p {
    color: ${color.vermelho};
    font-size: 36px;
    font-weight: bolder;
    text-align: center;
    line-height: 42px;
    width: 540px;
    margin: 140px auto 0;
  }
`;

export const HeaderLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${color.vermelho};
`;
