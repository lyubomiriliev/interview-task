import { Grid2 } from "@mui/material";
import styled from "styled-components";

export const StyledGridContainer = styled(Grid2)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #121212; /* Dark background */
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
