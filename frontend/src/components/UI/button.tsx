import { type ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../global/theme";

export const DefaultButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.palette.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return <DefaultButton {...props}>{children}</DefaultButton>;
}
