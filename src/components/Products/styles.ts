import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ProductContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 80px;
  }
  @media (max-width: ${breakpoints.smart}) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 80px;
  }
`;
