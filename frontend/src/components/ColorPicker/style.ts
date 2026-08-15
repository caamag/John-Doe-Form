import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface ColorProps {
  color: string;
  selected: boolean;
}

export const Color = styled.button<ColorProps>`
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 50%;
  border: ${({ selected }) =>
    selected ? "3px solid #000" : "2px solid transparent"};

  background-color: ${({ color }) => color};

  cursor: pointer;
`;
