import styled from "styled-components";
import { Button as AntButton } from "antd";

interface GenericButtonProps {
  brcolor?: string;
  brwidth?: number;
  radius?: number;
  width?: number;
  bg?: string;
  height?: number;
  type: "primary" | "outlined" | "default";
}

type Type = {
  type: string;
};

const getBg = ({ type }: Type) => {
  switch (type) {
    case "primary":
      return {
        background: "rgb(0, 97, 223)",
        color: "var(--whiteColor)",
      };
    case "outlined":
      return {
        background: "transparent",
        color: "var(--whiteColor)",
        border: "1.7px solid var(--whiteColor)",
      };
    case "default":
      return {
        background: "var(--whiteColor)",
        color: "rgb(13, 38, 59)",
        border: "1.7px solid var(--whiteColor)",
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
  max-width: 120px;
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  border-width: ${({ brwidth }) => (brwidth ? `${brwidth}px` : "2px")};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "2px")};
  background: ${({ bg }) => (bg ? `${bg}` : "#4CAF50")};
  ${getBg}
  cursor: pointer;
  font-family: var(--mont);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
`;
