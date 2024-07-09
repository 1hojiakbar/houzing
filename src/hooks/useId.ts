import { useId } from "react";

const useUniqeId = (): string => {
  const id = useId();
  return id;
};

export default useUniqeId;
