import { Button } from "@mui/material";
import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  background-color: #d4af37;
  border-radius: 20px;
`;

export const StyledLanguageButton = styled(Button)`
  background-color: #d4af37;
  color: black;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 20px;
  text-transform: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgb(172, 132, 2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  transition: all 0.3s ease;
`;
