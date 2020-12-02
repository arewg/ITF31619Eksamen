import React, { createContext, useState } from 'react';

export const SingleOfficeContext = createContext({
  singleOffice: '',
  updateSingleOffice: (singleOffice) => {},
});

const SingleOfficeProvider = ({ children }) => {
  const [singleOffice, setSingleOffice] = useState({});

  const updateSingleOffice = (newSingleOffice) => setSingleOffice(newSingleOffice);

  return (
    <SingleOfficeContext.Provider value={{ singleOffice, updateSingleOffice }}>
      {children}
    </SingleOfficeContext.Provider>
  );
};

export default SingleOfficeProvider;