import styled from "styled-components";

export const ListContainer = styled.div`
  margin-bottom: 120px;
  margin-top: 80px;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
  }
`;
