import React from "react";
import { StyledButton } from "./style";

interface GenericButtonProps {
  children: string;
  brcolor?: string;
  brwidth?: number;
  radius?: number;
  width?: number;
  bg?: string;
  onClick?: () => void;
  height?: number;
  type: "primary" | "outlined" | "default";
}

const GenericButton: React.FC<GenericButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children || "Generic Button"}
    </StyledButton>
  );
};

export default GenericButton;
