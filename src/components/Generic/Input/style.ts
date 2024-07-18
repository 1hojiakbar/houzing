import styled from "styled-components";
import { Input } from "antd";

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
  onChange?: () => void;
  height?: number;
  type?: "default" | "primary" | "secondary";
}

const GenericInput = styled(Input)<GenericInputProps>`
  outline: none;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  /* border-width: ${({ brwidth }) => (brwidth ? `${brwidth}px` : "1px")}; */
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "2px")};
  font-family: var(--mont);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};
  line-height: ${({ font }) => (font ? font : "")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
`;

export default GenericInput;
