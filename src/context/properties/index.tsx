import React, { createContext, ReactNode, useReducer, Dispatch } from "react";
import reducer, { State, Action } from "./reduce";

interface RootContextProps {
  children: ReactNode;
}

const initialState: State = {
  count: 0,
};

interface PropertiesContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const PropertiesContext = createContext<PropertiesContextProps | undefined>(
  undefined
);

const PropertiesProvider: React.FC<RootContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PropertiesContext.Provider value={{ state, dispatch }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
export { PropertiesContext };
