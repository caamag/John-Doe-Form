import styled from "styled-components";
import { type InputHTMLAttributes } from "react";
import { theme } from "../../global/theme";

type InputType = "text" | "number" | "email";

interface DefaultInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  type?: InputType;
  label?: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DefaultInput = styled.input`
  padding: 15px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${theme.palette.lightBackground};
  color: white;

  &::placeholder {
    color: ${theme.palette.lightText};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export function Input({
  type = "text",
  label,
  id,
  ...props
}: DefaultInputProps) {
  return (
    <Container>
      <DefaultInput id={id} type={type} {...props} />
    </Container>
  );
}
