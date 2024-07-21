import styled from "styled-components";

export interface GenericInputProps {
  brcolor?: string;
  brwidth?: number;
  radius?: number;
  width?: number;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  fontSize?: string;
  fontWeight?: number;
  font?: string;
  bg?: string;
  status?: "" | "warning" | "error";
  size?: "small" | "medium" | "large";
  prefix?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: number;
  type?: "default" | "primary" | "secondary";
}

export interface InputWrapperTypes {
  width?: number;
  leftIcon?: string;
  rightIcon?: string;
  radius?: number;
  height?: number;
}

export const InputWrapper = styled.div<InputWrapperTypes>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1.3px solid var(--outlinedColor);
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "2px")};
`;

export const Icon = styled.img``;

const GenericInput = styled.input<GenericInputProps>`
  outline: none;
  border: none;
  width: 100%;
  font-family: var(--mont);
  color: var(--primaryColor);
  line-height: ${({ font }) => (font ? font : "")};
  background-color: ${({ bg }) => (bg ? bg : "transparent")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "2px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};
`;

export default GenericInput;
