import styled from "styled-components";
import { Button as AntButton } from "antd";

export interface GenericButtonProps {
  children: React.ReactNode;
  radius?: number;
  width?: number;
  bg?: string;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
  color?: string;
  height?: number | string;
  type: "primary" | "outlined" | "default";
}

type Type = {
  type: string;
};

export interface InputWrapperTypes {
  width?: number;
}

export const Icon = styled.img``;

const getType = ({ type }: Type) => {
  switch (type) {
    case "primary":
      return {
        background: "var(--primary)",
        color: "var(--whiteColor)",
      };
    case "outlined":
      return {
        background: "transparent",
        color: "var(--primaryColor)",
        border: "1px solid var(--outlinedColor)",
      };
    case "default":
      return {
        background: "var(--whiteColor)",
        color: "rgb(13, 38, 59)",
      };
    default:
      return {
        background: "var(--whiteColor)",
        color: "#0D263B",
      };
  }
};

export const StyledButton = styled(AntButton)<GenericButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${getType}
  cursor: pointer;
  font-family: var(--mont);
  font-size: 14px;
  gap: 8px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  color: ${({ color }) => (color ? color : "var(--whiteColor)")};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "2px")};
`;
