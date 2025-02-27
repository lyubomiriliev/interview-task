import { Grid2 } from "@mui/material";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const StyledDiv = styled.div`
  width: 20%;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledGridContainer = styled(Grid2)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #121212;
  padding: 20px;
  cursor: pointer;
`;

export const StyledGridItem = styled(Grid2)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 35%;
  }

  @media (min-width: 1024px) {
    flex-basis: 20%;
  }
`;
