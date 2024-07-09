import React, { createContext, ReactNode } from "react";

interface RootContextProps {
  children: ReactNode;
}

const Root: React.Context<unknown> = createContext<unknown>(undefined);

const RootContext: React.FC<RootContextProps> = ({ children }) => {
  return <Root.Provider value={{}}>{children}</Root.Provider>;
};

export default RootContext;
