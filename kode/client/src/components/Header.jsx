import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  padding-top: 110px;
  padding-bottom: 110px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
  font-weight: bold;
  font-size: 45px;
`;





const Header = ({title, image}) => {


  return (
    <Title
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {title}
    </Title>
  );
};

export default Header;
