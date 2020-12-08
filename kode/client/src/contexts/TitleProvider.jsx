import React, { createContext, useState } from 'react';

export const TitleContext = createContext({
  state: '',
  updateState: (title) => {},
  setImageUrl: (url) => '',
  image: '',
});

const TitleProvider = ({ children }) => {
  const [state, setState] = useState();
  const [image, setImage] = useState(null);

  const updateState = (title) => setState(title);
  const setImageUrl = (url) => setImage(url);

  return (
    <TitleContext.Provider value={{ state, updateState, image, setImageUrl }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
