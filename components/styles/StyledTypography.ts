import styled from "styled-components";
import { Typography } from "@mui/material";

export const GameTitle = styled(Typography)`
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
`;

export const Provider = styled(Typography)`
  font-size: 0.9rem;
  color: #b3b3b3;
`;

export const BetInfo = styled(Typography)`
  font-size: 0.85rem;
  color: #d4af37; /* Gold color */
`;

export const GameIndex = styled(Typography)`
  position: absolute;
  bottom: 4px;
  right: 2px;
  border-radius: 20px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
`;
