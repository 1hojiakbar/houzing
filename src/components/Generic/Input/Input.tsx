import GenericInput, { GenericInputProps } from "./style";

const Input: React.FC<GenericInputProps> = ({ onChange, ...props }) => (
  <GenericInput {...props} onChange={onChange} />
);

export default Input;
