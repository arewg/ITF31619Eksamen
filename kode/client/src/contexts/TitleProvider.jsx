import React, { createContext, useState } from 'react';

export const TitleContext = createContext({
  state: '',
  updateState: (title) => {},
});

const TitleProvider = ({ children }) => {
  const [state, setState] = useState();

  const updateState = (title) => setState(title);

  return (
    <TitleContext.Provider value={{ state, updateState }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
