import React, { useContext } from 'react';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider';

const Title = styled.div`
  width: 100%;
  padding-top: 110px;
  padding-bottom: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
  font-weight: bold;
  font-size: 45px;
`;

const Header = () => {
  const headerTitle = useContext(TitleContext);

  return (
    <Title
      style={{
        backgroundImage: `url(${headerTitle.image})`
      }}
    >
      {headerTitle.state
        ? headerTitle.state
        : 'Velkommen til FG Rørleggerservice AS'}
    </Title>
  );
};

export default Header;
