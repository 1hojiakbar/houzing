import React from "react";
import { GenericButtonProps, Icon, StyledButton } from "./style";

const GenericButton: React.FC<GenericButtonProps> = ({
  children,
  onClick,
  iconRight,
  iconLeft,
  ...props
}) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      <Icon src={iconLeft && iconLeft} />
      {children || "Generic Button"}
      <Icon src={iconRight && iconRight} />
    </StyledButton>
  );
};

export default GenericButton;
