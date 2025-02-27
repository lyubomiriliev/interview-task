import styled from "styled-components";
import { Card, CardContent, CardMedia } from "@mui/material";

export const StyledCard = styled(Card)`
  background-color: #1e1e1e; /* Dark background */
  color: white;
  border-radius: 12px; /* Rounded corners */
  max-width: 250px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.15);
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 150px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
  background-color: #282828;
`;

export const StyledCardContent = styled(CardContent)`
  align-items: center;
  position: relative;
`;

export const FlexCardContent = styled(CardContent)`
  align-items: center;
  padding: 6px;
  justify-content: space-between;
  display: flex;
  position: relative;
`;
