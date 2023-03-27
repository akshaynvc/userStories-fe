import styled from "styled-components";
import { theme } from "../../theme";

export const CenteredButton = styled.button`
  display: block;
  margin: 2px auto;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${theme.blue};
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: ${theme.blue};
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 1rem;
  box-shadow: ${theme.boxShadow1};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.blue};
    box-shadow: ${theme.boxShadow2};
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;
