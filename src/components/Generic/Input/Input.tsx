import GenericInput, {
  GenericInputProps,
  Icon,
  InputWrapper,
  InputWrapperTypes,
} from "./style";

const Input: React.FC<GenericInputProps & InputWrapperTypes> = ({
  onChange,
  leftIcon,
  rightIcon,
  ...props
}) => (
  <InputWrapper>
    <Icon src={leftIcon && leftIcon} alt="" />
    <GenericInput {...props} onChange={onChange} />
    <Icon src={rightIcon && rightIcon} />
  </InputWrapper>
);

export default Input;
