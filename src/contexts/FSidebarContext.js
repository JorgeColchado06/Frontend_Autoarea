import React, {useState, createContext} from 'react';

export const FSidebarContext = createContext();

const FSidebarProvider = ({children}) => {
  const [abrir, setabrir] = useState(false);

  const handleClose = () => {
    setabrir(false)
  }

  return <FSidebarContext.Provider value={{abrir, setabrir, handleClose}}>{children}</FSidebarContext.Provider>;
};

export default FSidebarProvider;
