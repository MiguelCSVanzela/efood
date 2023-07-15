import styled from "styled-components";
import { color } from "../../styles";

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
`;
